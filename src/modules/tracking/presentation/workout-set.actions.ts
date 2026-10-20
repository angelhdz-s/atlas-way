'use server';

import type { Workouts, WorkoutSets } from '@/prisma/client';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import {
  workoutSetSchema,
  type WorkoutSetForm,
} from '@/modules/tracking/presentation/schemas/workout.schema';
import {
  getOwnedWorkout,
  getOwnedWorkoutTarget,
} from '@/modules/tracking/presentation/tracking.auth';
import { syncWorkoutTargetAfterSet } from '@/modules/tracking/presentation/workout-progress.helper';

type WorkoutSetFormWithId = WorkoutSetForm & {
  id: string;
};

export async function getWorkoutSetsByWorkoutId(
  workoutId: Workouts['id']
): Promise<ActionResponseProps<WorkoutSets[]>> {
  const ownedWorkoutResult = await getOwnedWorkout(workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  try {
    const workout = await prisma.workouts.findUnique({
      where: {
        id: workoutId,
      },
      include: {
        workoutTargets: {
          include: {
            workoutSets: true,
          },
        },
      },
    });

    const workoutSets = workout?.workoutTargets.flatMap((target) => target.workoutSets) ?? [];

    return ActionSuccess(workoutSets, 'Workout sets fetched successfully');
  } catch {
    return ActionFailure('Workout sets not found');
  }
}

export async function processWorkoutSetData(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const parsedWorkoutSet = workoutSetSchema.safeParse(data);
  if (!parsedWorkoutSet.success) return ActionFailure('Invalid data');

  const workoutSetData = parsedWorkoutSet.data;

  if (workoutSetData.id === undefined) {
    return createWorkoutSet(workoutSetData);
  }

  return updateWorkoutSet({
    ...workoutSetData,
    id: workoutSetData.id,
  });
}

export async function createWorkoutSet(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const parsedWorkoutSet = workoutSetSchema.safeParse(data);
  if (!parsedWorkoutSet.success) return ActionFailure('Invalid data');

  const workoutSetData = parsedWorkoutSet.data;

  const ownedWorkoutTargetResult = await getOwnedWorkoutTarget(workoutSetData.workoutTargetId);
  if (!ownedWorkoutTargetResult.success) {
    return ActionFailure(ownedWorkoutTargetResult.message);
  }

  const { workout, workoutTarget } = ownedWorkoutTargetResult;

  if (workout.statusId !== 'IN_PROGRESS') {
    return ActionFailure('Workout is not in progress');
  }

  try {
    const workoutSet = await prisma.$transaction(async (tx) => {
      const createdWorkoutSet = await tx.workoutSets.create({
        data: {
          reps: workoutSetData.reps,
          set: workoutSetData.set,
          weight: workoutSetData.weight,
          rir: workoutSetData.rir,
          workoutTargetId: workoutTarget.id,
          exerciseId: workoutTarget.exerciseId,
        },
      });

      await syncWorkoutTargetAfterSet(tx, workoutTarget.id);

      return createdWorkoutSet;
    });

    return ActionSuccess(workoutSet, 'Workout set created successfully');
  } catch {
    return ActionFailure('Error creating workout set');
  }
}

export async function updateWorkoutSet(
  data: WorkoutSetFormWithId
): Promise<ActionResponseProps<WorkoutSets>> {
  const parsedWorkoutSet = workoutSetSchema.safeParse(data);
  if (!parsedWorkoutSet.success) return ActionFailure('Invalid data');

  const workoutSetData = parsedWorkoutSet.data;
  if (!workoutSetData.id) return ActionFailure('Workout set id is required');

  const ownedWorkoutTargetResult = await getOwnedWorkoutTarget(workoutSetData.workoutTargetId);
  if (!ownedWorkoutTargetResult.success) {
    return ActionFailure(ownedWorkoutTargetResult.message);
  }

  if (ownedWorkoutTargetResult.workout.statusId !== 'IN_PROGRESS') {
    return ActionFailure('Workout is not in progress');
  }

  try {
    const workoutSet = await prisma.workoutSets.findUnique({
      where: {
        id: workoutSetData.id,
      },
    });

    if (!workoutSet || workoutSet.workoutTargetId !== workoutSetData.workoutTargetId) {
      return ActionFailure('Workout set not found');
    }

    const updatedWorkoutSet = await prisma.workoutSets.update({
      where: {
        id: workoutSetData.id,
      },
      data: {
        reps: workoutSetData.reps,
        weight: workoutSetData.weight,
        rir: workoutSetData.rir,
      },
    });

    return ActionSuccess(updatedWorkoutSet, 'Workout set updated successfully');
  } catch {
    return ActionFailure('Error updating workout set');
  }
}
