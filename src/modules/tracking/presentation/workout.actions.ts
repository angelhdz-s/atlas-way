'use server';

import { getWorkoutTargetsByWorkoutId } from '@/modules/tracking/presentation/workout-target.actions';
import { getCurrentUser } from '@/modules/user/presentation/user.actions';
import type { Workouts } from '@/prisma/client';
import { prisma } from '@/shared/infrastructure/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponseProps,
  type ActionFailureType,
  type ActionSuccessType,
} from '@/shared/presentation/action.response';
import { randomUUID } from 'node:crypto';

// ToDo: add session validation at the top of the actions
// const session = await getServerSession();
// if (!session) return ActionFailure('Unauthorized');
export async function getTodaysWorkout(): Promise<ActionResponseProps<Workouts>> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getDate() + 1);

  const todaysWorkout = await prisma.workouts.findFirst({
    where: {
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  if (todaysWorkout) return ActionSuccess(todaysWorkout, 'Workout created successfully');

  const createdWorkout = await createWorkout();
  if (!createdWorkout.success) return createdWorkout;

  return ActionSuccess(createdWorkout.data, 'Training already created');
}

export async function createWorkout(): Promise<ActionResponseProps<Workouts>> {
  const date = new Date();

  const userId = await getCurrentUser();
  if (!userId.success) return userId;

  if (!userId.data) return ActionFailure('User not found');

  const id = randomUUID();

  const routine = await prisma.routines.findFirst();
  if (!routine) return ActionFailure('Routine not found');
  const routineId = routine.id;

  const session = await prisma.sessions.findFirst();
  if (!session) return ActionFailure('Routine not found');
  const sessionId = session.id;

  try {
    const workout = await prisma.workouts.create({
      data: {
        id,
        date,
        dayTypeId: 'training',
        statusId: 'PENDING',
        userId: userId.data.id,
        routineId,
        sessionId,
      },
    });
    return ActionSuccess(workout, 'Workout created successfully');
  } catch (_) {
    return ActionFailure('Error creating training');
  }
}

export async function getWorkoutById(
  workoutId: string
): Promise<ActionResponseProps<Workouts | null>> {
  try {
    const training = await prisma.workouts.findUnique({
      where: {
        id: workoutId,
      },
    });
    return ActionSuccess(training, 'Training returned successfully');
  } catch (_) {
    return ActionFailure('Error getting training by id');
  }
}

/**
 * Update `Workout` status to `IN_PROGRESS`
 *
 * @remarks
 * Before updating check if requirements are met:
 * 1. Current status being `TARGETS_SET`
 * 2. There must be `Workout Target`s associated to the target `Workout`
 * 3. At least one `Workout Target` associated must be IN_PROGRESS
 *
 * @param workout Updating `Workout` DTO object
 *
 * @returns An async {@link ActionResponseProps} which contains:
 *
 * **Success case** - contains an {@link ActionSuccessType} object:
 *
 * > - `success`: `true`
 * > - `message`: User friendly message about the success operation
 * > - `data`: Contains the updated `Workout` as {@link Workouts} DTO
 *
 *
 * **Failure case** - contains an {@link ActionFailureType} object:
 *
 * > - `success`: `false`
 * > - `message`: User friendly message about the failed operation
 * > - `data`: Contains null (due to the error)
 */
export async function setWorkoutInProgress(
  workout: Workouts
): Promise<ActionResponseProps<Workouts>> {
  // Validate current status is not "TARGETS_SET"
  if (workout.statusId !== 'TARGETS_SET')
    return ActionFailure('Workout process. Not allowed status transition');

  // Verify at least one Workout Target exist
  const workoutTargetsResult = await getWorkoutTargetsByWorkoutId(workout.id);
  if (!workoutTargetsResult.success) return ActionFailure(workoutTargetsResult.message);
  if (workoutTargetsResult.data.length < 1)
    return ActionFailure('Workout process. Not workout targets found');
  const workoutTargets = workoutTargetsResult.data;
  const areAnyWorkoutTargetInProgress = workoutTargets.some((wt) => wt.statusId === 'IN_PROGRESS');

  // Verify at least one Workout Target status is IN_PROGRESS
  if (!areAnyWorkoutTargetInProgress)
    return ActionFailure('Workout process. No workout target in progress');

  // Update status
  try {
    const updatedWorkout = await prisma.workouts.update({
      where: {
        id: workout.id,
      },
      data: {
        ...workout,
        statusId: 'IN_PROGRESS',
      },
    });

    return ActionSuccess(updatedWorkout, 'Workout process started successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.log(e);
    return ActionFailure('Error starting workout process');
  }
}

/**
 * Finish `Workout` process
 *
 * @remarks
 * Determine the final `Workout` status:
 * - `SKIPPED`: For no one completed target
 * - `INTERRUPTED`: At least one target completed but not all
 * - `COMPLETED`: All targets were completed
 *
 * @param workout Updating workout DTO object
 *
 * @returns An async {@link ActionResponseProps} which contains:
 *
 * **Success case** - contains an {@link ActionSuccessType<Workouts>} object:
 *
 * > - `success`: `true`
 * > - `message`: User friendly message about the success operation
 * > - `data`: Contains the updated `Workout` as {@link Workouts} DTO
 *
 *
 * **Failure case** - contains an {@link ActionFailureType} object:
 *
 * > - `success`: `false`
 * > - `message`: User friendly message about the failed operation
 * > - `data`: Contains null (due to the error)
 */
export async function finishWorkout(workout: Workouts): Promise<ActionResponseProps<Workouts>> {
  // Check if current workout status is TARGETS_SET;
  // TARGETS_SET status can not be in a workout
  // with one or more completed targets
  if (workout.statusId === 'TARGETS_SET') {
    try {
      const updatedWorkout = await prisma.workouts.update({
        where: {
          id: workout.id,
        },
        data: {
          ...workout,
          statusId: 'SKIPPED', // Update status to skipped (no one target was completed)
        },
      });

      return ActionSuccess(updatedWorkout, 'Workout skipped successfully');
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: Server error log
      console.log(e);
      return ActionFailure('Error skipping workout');
    }
  }

  // Check if completed targets are not equal to total targets;
  // At least one target was completed but not all
  if (workout.completedTargets !== workout.totalTargets) {
    try {
      const updatedWorkout = await prisma.workouts.update({
        where: {
          id: workout.id,
        },
        data: {
          ...workout,
          // Update status to interrupted (at least
          // one target was completed but no all)
          statusId: 'INTERRUPTED',
        },
      });

      return ActionSuccess(updatedWorkout, 'Workout interrupted successfully');
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: Server error log
      console.log(e);
      return ActionFailure('Error interrupting workout');
    }
  }

  // For completed targets are equal to total targets
  try {
    const updatedWorkout = await prisma.workouts.update({
      where: {
        id: workout.id,
      },
      data: {
        ...workout,
        statusId: 'COMPLETED', // All targets completed
      },
    });

    return ActionSuccess(updatedWorkout, 'Workout completed successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.log(e);
    return ActionFailure('Error completing workout');
  }
}
