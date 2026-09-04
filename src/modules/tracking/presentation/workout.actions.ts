'use server';

import { getCurrentUser } from '@/modules/user/presentation/user.actions';
import type { Workouts } from '@/prisma/client';
import { prisma } from '@/shared/infrastructure/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponseProps,
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
