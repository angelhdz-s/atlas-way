'use server';

import type { WorkoutStatusEnum, Workouts } from '@/prisma/client';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import { revalidatePath } from 'next/cache';
import { randomUUID } from 'node:crypto';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';
import {
  resolveRoutineSessionForDate,
  todayDateOnly,
} from '@/modules/tracking/domain/routine-session.rules';
import { resolveWorkoutFinalStatus } from '@/modules/tracking/domain/workout-status.rules';
import { getOwnedWorkout, getTrackingUserId } from '@/modules/tracking/presentation/tracking.auth';

export type TodayTrackingExercise = {
  id: string;
  name: string;
  description: string | null;
  sets: number;
  reps: number;
  weight: number;
};

export type TodayTrackingSession = {
  id: string;
  name: string;
  description: string | null;
  exercises: TodayTrackingExercise[];
};

export type TodayTrackingOverview = {
  hasActiveRoutine: boolean;
  routineName: string | null;
  dayNumber: number | null;
  isRestDay: boolean;
  session: TodayTrackingSession | null;
  workout: {
    id: string;
    statusId: WorkoutStatusEnum;
  } | null;
};

function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: unknown }).code === 'P2002'
  );
}

async function findExistingWorkout({
  userId,
  routineId,
  sessionId,
  date,
}: {
  userId: string;
  routineId: string;
  sessionId: string | null;
  date: Date;
}): Promise<Workouts | null> {
  return prisma.workouts.findFirst({
    where: {
      userId,
      routineId,
      sessionId,
      date,
    },
  });
}

async function createWorkoutForUser(
  userId: string,
  date: Date
): Promise<ActionResponseProps<Workouts>> {
  const routine = await prisma.routines.findFirst({
    where: {
      userId,
      active: true,
    },
    include: {
      plan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!routine) return ActionFailure('Active routine not found');

  const routineDay = resolveRoutineSessionForDate({
    routine: {
      initialDate: routine.initialDate,
      days: routine.days,
    },
    plan: routine.plan.map((p) => ({
      day: p.dayNumber,
      sessionId: p.sessionId,
    })),
    date,
  });

  if (!routineDay) return ActionFailure('No routine day scheduled for today');

  const existingWorkout = await findExistingWorkout({
    userId,
    routineId: routine.id,
    sessionId: routineDay.sessionId,
    date,
  });

  if (existingWorkout) return ActionSuccess(existingWorkout, 'Workout found');

  try {
    const workout = await prisma.workouts.create({
      data: {
        id: randomUUID(),
        date,
        dayTypeId: routineDay.sessionId ? 'training' : 'rest',
        statusId: routineDay.sessionId ? 'PENDING' : 'COMPLETED',
        userId,
        routineId: routine.id,
        sessionId: routineDay.sessionId,
        totalTargets: 0,
        completedTargets: 0,
      },
    });

    return ActionSuccess(
      workout,
      routineDay.sessionId ? 'Workout created successfully' : 'Rest workout created successfully'
    );
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      const workout = await findExistingWorkout({
        userId,
        routineId: routine.id,
        sessionId: routineDay.sessionId,
        date,
      });
      if (workout) return ActionSuccess(workout, 'Workout found');
    }

    return ActionFailure('Error creating workout');
  }
}

export async function getTodayTrackingOverview(): Promise<
  ActionResponseProps<TodayTrackingOverview>
> {
  const authResult = await getTrackingUserId();
  if (!authResult.success) return ActionFailure(authResult.message);

  const date = todayDateOnly();

  const routine = await prisma.routines.findFirst({
    where: {
      userId: authResult.userId,
      active: true,
    },
    include: {
      plan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!routine) {
    return ActionSuccess(
      {
        hasActiveRoutine: false,
        routineName: null,
        dayNumber: null,
        isRestDay: false,
        session: null,
        workout: null,
      },
      'No active routine found'
    );
  }

  const routineDay = resolveRoutineSessionForDate({
    routine: {
      initialDate: routine.initialDate,
      days: routine.days,
    },
    plan: routine.plan.map((p) => ({
      day: p.dayNumber,
      sessionId: p.sessionId,
    })),
    date,
  });

  const workout = await prisma.workouts.findFirst({
    where: {
      userId: authResult.userId,
      date,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  let session: TodayTrackingSession | null = null;

  if (routineDay?.sessionId) {
    const sessionRecord = await prisma.sessions.findFirst({
      where: {
        id: routineDay.sessionId,
        userId: authResult.userId,
      },
      include: {
        sessionToExercise: {
          include: {
            exercise: true,
          },
        },
      },
    });

    if (sessionRecord) {
      session = {
        id: sessionRecord.id,
        name: sessionRecord.name,
        description: sessionRecord.description,
        exercises: sessionRecord.sessionToExercise.map(({ exercise }) => ({
          id: exercise.id,
          name: exercise.name,
          description: exercise.description,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight,
        })),
      };
    }
  }

  return ActionSuccess(
    {
      hasActiveRoutine: true,
      routineName: routine.name,
      dayNumber: routineDay?.dayNumber ?? null,
      isRestDay: routineDay !== null && routineDay.sessionId === null,
      session,
      workout: workout
        ? {
            id: workout.id,
            statusId: workout.statusId,
          }
        : null,
    },
    'Today tracking overview found'
  );
}

export async function getTodaysWorkout(): Promise<ActionResponseProps<Workouts>> {
  const authResult = await getTrackingUserId();
  if (!authResult.success) return ActionFailure(authResult.message);

  const date = todayDateOnly();

  const todaysWorkout = await prisma.workouts.findFirst({
    where: {
      userId: authResult.userId,
      date,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  if (todaysWorkout) return ActionSuccess(todaysWorkout, 'Workout found');

  return createWorkoutForUser(authResult.userId, date);
}

export async function createWorkout(): Promise<ActionResponseProps<Workouts>> {
  const authResult = await getTrackingUserId();
  if (!authResult.success) return ActionFailure(authResult.message);

  return createWorkoutForUser(authResult.userId, todayDateOnly());
}

export async function getWorkoutById(
  workoutId: string
): Promise<ActionResponseProps<Workouts | null>> {
  const ownedWorkoutResult = await getOwnedWorkout(workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  return ActionSuccess(ownedWorkoutResult.workout, 'Workout found');
}

/**
 * Update `Workout` status to `IN_PROGRESS`.
 *
 * Requirements:
 * 1. Current status is `TARGETS_SET`.
 * 2. There is at least one `WorkoutTarget` associated with the workout.
 */
export async function setWorkoutInProgress(
  workoutId: string
): Promise<ActionResponseProps<Workouts>> {
  const ownedWorkoutResult = await getOwnedWorkout(workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  const { workout } = ownedWorkoutResult;

  if (workout.statusId === 'IN_PROGRESS') {
    return ActionSuccess(workout, 'Workout already in progress');
  }

  if (workout.statusId !== 'TARGETS_SET') {
    return ActionFailure('Workout process. Not allowed status transition');
  }

  const totalTargets = await prisma.workoutTargets.count({
    where: {
      workoutId,
    },
  });

  if (totalTargets < 1) return ActionFailure('Workout process. No workout targets found');

  try {
    const updatedWorkout = await prisma.workouts.update({
      where: {
        id: workoutId,
      },
      data: {
        statusId: 'IN_PROGRESS',
        totalTargets,
      },
    });

    return ActionSuccess(updatedWorkout, 'Workout process started successfully');
  } catch {
    return ActionFailure('Error starting workout process');
  }
}

/**
 * Finish a `Workout` process.
 *
 * The final status is calculated from the targets stored in the database:
 * - `SKIPPED`: no target was completed
 * - `INTERRUPTED`: at least one target was completed but not all of them
 * - `COMPLETED`: every target was completed
 */
export async function finishWorkout(workoutId: string): Promise<ActionResponseProps<Workouts>> {
  const ownedWorkoutResult = await getOwnedWorkout(workoutId);
  if (!ownedWorkoutResult.success) return ActionFailure(ownedWorkoutResult.message);

  const { workout } = ownedWorkoutResult;

  if (
    workout.statusId === 'COMPLETED' ||
    workout.statusId === 'INTERRUPTED' ||
    workout.statusId === 'SKIPPED'
  ) {
    return ActionSuccess(workout, 'Workout already finished');
  }

  if (workout.statusId !== 'IN_PROGRESS') {
    return ActionFailure('Workout process. Not allowed status transition');
  }

  const totalTargets = await prisma.workoutTargets.count({
    where: {
      workoutId,
    },
  });

  const completedTargets = await prisma.workoutTargets.count({
    where: {
      workoutId,
      statusId: 'COMPLETED',
    },
  });

  const statusId = resolveWorkoutFinalStatus({
    totalTargets,
    completedTargets,
  });

  try {
    const updatedWorkout = await prisma.workouts.update({
      where: {
        id: workoutId,
      },
      data: {
        statusId,
        totalTargets,
        completedTargets,
      },
    });

    revalidatePath('/dashboard/tracking');
    revalidatePath(`/dashboard/tracking/${workoutId}/training`);

    const message =
      statusId === 'COMPLETED'
        ? 'Workout completed successfully'
        : statusId === 'INTERRUPTED'
          ? 'Workout interrupted successfully'
          : 'Workout skipped successfully';

    return ActionSuccess(updatedWorkout, message);
  } catch {
    return ActionFailure('Error finishing workout');
  }
}
