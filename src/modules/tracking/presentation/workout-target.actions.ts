'use server';

import {
  workoutTargetsSchema,
  type WorkoutTargetsForm,
} from '@/modules/tracking/presentation/schemas/workout-targets.schema';
import { getWorkoutSetsByWorkoutId } from '@/modules/tracking/presentation/workout-set.actions';
import { getWorkoutById } from '@/modules/tracking/presentation/workout.actions';
import type { Prisma, WorkoutTargets } from '@/prisma/client';
import { prisma } from '@/shared/infrastructure/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
  type ActionFailureType,
  type ActionSuccessType,
  type ActionResponseProps,
} from '@/shared/presentation/action.response';

// ToDo: add session validation at the top of the actions
// const session = await getServerSession();
// if (!session) return ActionFailure('Unauthorized');
export async function createWorkoutTargets(
  data: WorkoutTargetsForm
): Promise<ActionResponseProps<true>> {
  const parsedWorkoutTargets = workoutTargetsSchema.safeParse(data);
  if (!parsedWorkoutTargets.success) {
    return ActionFailure('Invalid data');
  }

  const workout = await prisma.workouts.findUnique({
    where: {
      id: data.workoutId,
    },
  });

  if (!workout) {
    return ActionFailure('Training not found');
  }

  if (workout.statusId !== 'PENDING') {
    const status = workout.statusId;
    return ActionFailure(`Workout was ${status}`);
  }

  try {
    await prisma.$transaction([
      prisma.workoutTargets.createMany({
        data: data.exercises.map((e) => ({
          exerciseId: e.exerciseId,
          sets: e.sets,
          reps: e.reps,
          weight: e.weight,
          workoutId: workout.id,
          statusId: 'PENDING',
        })),
        skipDuplicates: true,
      }),
      prisma.workouts.update({
        where: {
          id: workout.id,
        },
        data: {
          statusId: 'TARGETS_SET',
        },
      }),
    ]);

    return ActionSuccess(true, 'Workout targets created successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Error details for server
    console.log(e);
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
  const trainingResult = await getWorkoutById(workoutId);
  if (!trainingResult.success) return trainingResult;
  if (!trainingResult.data) return ActionFailure('Workout not found');

  try {
    const workoutTargets = await prisma.workoutTargets.findMany({
      where: {
        workoutId,
      },
      ...workoutTargetsAnatomy,
    });

    return ActionSuccess(workoutTargets, 'Workout targets found');
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: Error details for server
    console.log(error);
    return ActionFailure('Error getting workout targets');
  }
}

/**
 * Update a `WorkoutTarget` status to `IN_PROGRESS`
 *
 * @remarks
 * Before updating check if requirements are met:
 * 1. Current status being `PENDING`
 * 2. There must be `WorkoutSets` associated to the `WorkoutTarget`
 *
 * @param workoutTarget Updating `WorkoutTargets` DTO object
 *
 * @returns An async {@link ActionResponseProps} which contains:
 *
 * **Success case** - contains an {@link ActionSuccessType} object:
 *
 * > - `success`: `true`
 * > - `message`: User friendly message about the success operation
 * > - `data`: Contains the updated `WorkoutTargets` as {@link WorkoutTargets} DTO
 *
 *
 * **Failure case** - contains an {@link ActionFailureType} object:
 *
 * > - `success`: `false`
 * > - `message`: User friendly message about the failed operation
 * > - `data`: Contains null (due to the error)
 */
export async function setWorkoutTargetInProgress(
  workoutTarget: WorkoutTargets
): Promise<ActionResponseProps<WorkoutTargets>> {
  // Validate current status is not "PENDING"
  if (workoutTarget.statusId !== 'PENDING')
    return ActionFailure('Workout target. Not allowed status transition');

  // Verify at least one Workout Set exist
  const workoutTargetsResult = await getWorkoutSetsByWorkoutId(workoutTarget.workoutId);
  if (!workoutTargetsResult.success) return ActionFailure(workoutTargetsResult.message);
  if (workoutTargetsResult.data.length < 1) return ActionFailure('Workout target. Not sets found');

  // Update status
  try {
    const updatedWorkoutTarget = await prisma.workoutTargets.update({
      where: {
        id: workoutTarget.id,
      },
      data: {
        ...workoutTarget,
        statusId: 'IN_PROGRESS',
      },
    });

    return ActionSuccess(updatedWorkoutTarget, 'Workout target started successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.log(e);
    return ActionFailure('Error starting workout target');
  }
}

/**
 * Finish `WorkoutTarget` stage
 *
 * @remarks
 * Determine the final `WorkoutTarget` status:
 * - `SKIPPED`: For no one completed set
 * - `INTERRUPTED`: At least one set completed but not all
 * - `COMPLETED`: All sets were completed
 *
 * @param workout Updating `WorkoutTarget` DTO object
 *
 * @returns An async {@link ActionResponseProps} which contains:
 *
 * **Success case** - contains an {@link ActionSuccessType} object:
 *
 * - `success`: `true`
 * - `message`: User friendly message about the success operation
 * - `data`: Contains the updated `WorkoutTarget` {@link WorkoutTargets} DTO
 *
 *
 * **Failure case** - contains an {@link ActionFailureType} object:
 *
 * - `success`: `false`
 * - `message`: User friendly message about the failed operation
 * - `data`: Contains null (due to the error)
 */
export async function finishWorkoutTarget(
  workoutTarget: WorkoutTargets
): Promise<ActionResponseProps<WorkoutTargets>> {
  // Check if current workout status is PENDING;
  // PENDING status can not be in a Workout Target
  // with one or more completed sets
  if (workoutTarget.statusId === 'PENDING') {
    try {
      const updatedWorkoutTarget = await prisma.workoutTargets.update({
        where: {
          id: workoutTarget.id,
        },
        data: {
          ...workoutTarget,
          statusId: 'SKIPPED', // Update status to skipped (no one set was completed)
        },
      });

      return ActionSuccess(updatedWorkoutTarget, 'Workout skipped successfully');
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: Server error log
      console.log(e);
      return ActionFailure('Error skipping workout');
    }
  }

  // Check if completed sets are not equal to target sets;
  // At least one set was completed but not all
  if (workoutTarget.completedSets !== workoutTarget.sets) {
    try {
      const updatedWorkoutTarget = await prisma.workoutTargets.update({
        where: {
          id: workoutTarget.id,
        },
        data: {
          ...workoutTarget,
          // Update status to interrupted (at least
          // one set was completed but no all)
          statusId: 'INTERRUPTED',
        },
      });

      return ActionSuccess(updatedWorkoutTarget, 'Workout target interrupted successfully');
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: Server error log
      console.log(e);
      return ActionFailure('Error interrupting workout target');
    }
  }

  // For completed targets are equal to total targets
  try {
    const updatedWorkoutTarget = await prisma.workoutTargets.update({
      where: {
        id: workoutTarget.id,
      },
      data: {
        ...workoutTarget,
        statusId: 'COMPLETED', // All sets are completed
      },
    });

    return ActionSuccess(updatedWorkoutTarget, 'Workout target completed successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.log(e);
    return ActionFailure('Error completing workout target');
  }
}
