'use server';

import type { Prisma, WorkoutTargets } from '@/prisma/client';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import {
  workoutTargetsSchema,
  type WorkoutTargetsForm,
} from '@/modules/tracking/presentation/schemas/workout-targets.schema';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import {
  canReopenWorkoutTarget,
  resolveReopenedWorkoutTargetStatus,
  resolveWorkoutTargetFinalStatus,
} from '@/modules/tracking/domain/workout-target-status.rules';
import {
  getOwnedWorkout,
  getOwnedWorkoutTarget,
} from '@/modules/tracking/presentation/tracking.auth';
import { syncWorkoutProgress } from '@/modules/tracking/presentation/workout-progress.helper';

export async function createWorkoutTargets(
  data: WorkoutTargetsForm
): Promise<ActionResponseProps<true>> {
  const parsedWorkoutTargets = workoutTargetsSchema.safeParse(data);
  if (!parsedWorkoutTargets.success) return ActionFailure('Invalid data');

  const ownedWorkoutResult = await getOwnedWorkout(data.workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  const { workout } = ownedWorkoutResult;

  if (workout.statusId !== 'PENDING') {
    return ActionFailure(`Workout was ${workout.statusId}`);
  }

  if (!workout.sessionId) return ActionFailure('Workout has no session');

  if (data.exercises.length === 0) return ActionFailure('Workout targets can not be empty');

  const exerciseIds = data.exercises.map((exercise) => exercise.exerciseId);
  if (new Set(exerciseIds).size !== exerciseIds.length) {
    return ActionFailure('Workout targets contain duplicated exercises');
  }

  const sessionExercises = await prisma.sessionsToExercises.findMany({
    where: {
      sessionId: workout.sessionId,
      exerciseId: {
        in: exerciseIds,
      },
    },
  });

  if (sessionExercises.length !== exerciseIds.length) {
    return ActionFailure('Some exercises do not belong to the workout session');
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.workoutTargets.createMany({
        data: data.exercises.map((exercise) => ({
          exerciseId: exercise.exerciseId,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight,
          workoutId: workout.id,
          statusId: 'PENDING',
        })),
        skipDuplicates: true,
      });

      const totalTargets = await tx.workoutTargets.count({
        where: {
          workoutId: workout.id,
        },
      });

      await tx.workouts.update({
        where: {
          id: workout.id,
        },
        data: {
          statusId: 'TARGETS_SET',
          totalTargets,
        },
      });
    });

    return ActionSuccess(true, 'Workout targets created successfully');
  } catch {
    return ActionFailure('Error creating workout targets');
  }
}

const workoutTargetsAnatomy = {
  include: {
    exercise: {
      select: {
        name: true,
        description: true,
      },
    },
  },
} satisfies Prisma.WorkoutTargetsDefaultArgs;

export type FullWorkoutTargets = Prisma.WorkoutTargetsGetPayload<typeof workoutTargetsAnatomy>;

export async function getWorkoutTargetsByWorkoutId(
  workoutId: string
): Promise<ActionResponseProps<FullWorkoutTargets[]>> {
  const ownedWorkoutResult = await getOwnedWorkout(workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  try {
    const workoutTargets = await prisma.workoutTargets.findMany({
      where: {
        workoutId,
      },
      ...workoutTargetsAnatomy,
    });

    return ActionSuccess(workoutTargets, 'Workout targets found');
  } catch {
    return ActionFailure('Error getting workout targets');
  }
}

/**
 * Update a `WorkoutTarget` status to `IN_PROGRESS`.
 *
 * Requirements:
 * 1. Current status is `PENDING`.
 * 2. The target belongs to the current user.
 */
export async function setWorkoutTargetInProgress(
  workoutTargetId: string
): Promise<ActionResponseProps<WorkoutTargets>> {
  const ownedWorkoutTargetResult = await getOwnedWorkoutTarget(workoutTargetId);
  if (!ownedWorkoutTargetResult.success) {
    return ActionFailure(ownedWorkoutTargetResult.message);
  }

  const { workoutTarget } = ownedWorkoutTargetResult;

  if (workoutTarget.statusId === 'IN_PROGRESS') {
    return ActionSuccess(workoutTarget, 'Workout target already in progress');
  }

  if (workoutTarget.statusId !== 'PENDING') {
    return ActionFailure('Workout target. Not allowed status transition');
  }

  try {
    const updatedWorkoutTarget = await prisma.$transaction(async (tx) => {
      const completedSets = await tx.workoutSets.count({
        where: {
          workoutTargetId,
        },
      });

      return tx.workoutTargets.update({
        where: {
          id: workoutTargetId,
        },
        data: {
          statusId: 'IN_PROGRESS',
          completedSets,
        },
      });
    });

    return ActionSuccess(updatedWorkoutTarget, 'Workout target started successfully');
  } catch {
    return ActionFailure('Error starting workout target');
  }
}

/**
 * Finish a `WorkoutTarget` stage and calculate its final status from the
 * persisted sets.
 */
export async function finishWorkoutTarget(
  workoutTargetId: string
): Promise<ActionResponseProps<WorkoutTargets>> {
  const ownedWorkoutTargetResult = await getOwnedWorkoutTarget(workoutTargetId);
  if (!ownedWorkoutTargetResult.success) {
    return ActionFailure(ownedWorkoutTargetResult.message);
  }

  const { workoutTarget } = ownedWorkoutTargetResult;

  try {
    const updatedWorkoutTarget = await prisma.$transaction(async (tx) => {
      const completedSets = await tx.workoutSets.count({
        where: {
          workoutTargetId,
        },
      });

      const statusId = resolveWorkoutTargetFinalStatus({
        totalSets: workoutTarget.sets,
        completedSets,
      });

      const updated = await tx.workoutTargets.update({
        where: {
          id: workoutTargetId,
        },
        data: {
          statusId,
          completedSets,
        },
      });

      await syncWorkoutProgress(tx, workoutTarget.workoutId);

      return updated;
    });

    return ActionSuccess(updatedWorkoutTarget, 'Workout target finished successfully');
  } catch {
    return ActionFailure('Error finishing workout target');
  }
}

export async function endWorkoutTarget(
  workoutTargetId: string
): Promise<ActionResponseProps<WorkoutTargets>> {
  return finishWorkoutTarget(workoutTargetId);
}

/**
 * Reopen an interrupted or skipped `WorkoutTarget` so the user can retake it.
 */
export async function unfinishWorkoutTarget(
  workoutTargetId: string
): Promise<ActionResponseProps<WorkoutTargets>> {
  const ownedWorkoutTargetResult = await getOwnedWorkoutTarget(workoutTargetId);
  if (!ownedWorkoutTargetResult.success) {
    return ActionFailure(ownedWorkoutTargetResult.message);
  }

  const { workoutTarget } = ownedWorkoutTargetResult;

  if (!canReopenWorkoutTarget(workoutTarget.statusId)) {
    return ActionFailure('Workout target. Not allowed status transition');
  }

  try {
    const updatedWorkoutTarget = await prisma.$transaction(async (tx) => {
      const completedSets = await tx.workoutSets.count({
        where: {
          workoutTargetId,
        },
      });

      const statusId = resolveReopenedWorkoutTargetStatus(completedSets);

      const updated = await tx.workoutTargets.update({
        where: {
          id: workoutTargetId,
        },
        data: {
          statusId,
          completedSets,
        },
      });

      await syncWorkoutProgress(tx, workoutTarget.workoutId);

      return updated;
    });

    return ActionSuccess(updatedWorkoutTarget, 'Workout target reopened successfully');
  } catch {
    return ActionFailure('Error reopening workout target');
  }
}

export async function reopenWorkoutTarget(
  workoutTargetId: string
): Promise<ActionResponseProps<WorkoutTargets>> {
  return unfinishWorkoutTarget(workoutTargetId);
}
