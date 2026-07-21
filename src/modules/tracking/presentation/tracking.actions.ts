'use server';

import { randomUUID } from 'node:crypto';
import type { Training } from '@/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponseProps,
} from '@/shared/presentation/action.response';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { getCurrentUser } from '@/modules/user/presentation/user.actions';
import {
  exerciseTargetsSchema,
  type ExerciseTargetsForm,
} from '@/modules/tracking/presentation/schemas/exercise-targets.schema';

export async function getTodaysTraining(): Promise<ActionResponseProps<Training>> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getDate() + 1);

  const todayTraining = await prisma.training.findFirst({
    where: {
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  if (todayTraining) return ActionSuccess(todayTraining, 'Training created successfully');

  const createdTraining = await createTraining();
  if (!createdTraining.success) return createdTraining;

  return ActionSuccess(createdTraining.data, 'Training already created');
}

export async function createTraining(): Promise<ActionResponseProps<Training>> {
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
    const training = await prisma.training.create({
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
    return ActionSuccess(training, 'Training created successfully');
  } catch (_) {
    return ActionFailure('Error creating training');
  }
}

export async function getTrainingById(
  trainingId: string
): Promise<ActionResponseProps<Training | null>> {
  try {
    const training = await prisma.training.findUnique({
      where: {
        id: trainingId,
      },
    });
    return ActionSuccess(training, 'Training returned successfully');
  } catch (_) {
    return ActionFailure('Error getting training by id');
  }
}

export async function createTargets(data: ExerciseTargetsForm): Promise<ActionResponseProps<true>> {
  console.log(data);
  const parseResult = exerciseTargetsSchema.safeParse(data);
  if (!parseResult.success) {
    console.log('Invalid data');
    return ActionFailure('Invalid data');
  }

  const training = await prisma.training.findUnique({
    where: {
      id: data.trainingId,
    },
  });

  if (!training) {
    console.log('Training not found');
    return ActionFailure('Training not found');
  }

  if (training.statusId !== 'PENDING') {
    const status = training.statusId;
    console.log(`Training was ${status}`);
    return ActionFailure(`Training was ${status}`);
  }

  try {
    await prisma.$transaction([
      prisma.trainingPlan.createMany({
        data: data.exercises.map((e) => ({
          exerciseId: e.exerciseId,
          sets: e.sets,
          reps: e.reps,
          weight: e.weight,
          trainingId: training.id,
          statusId: 'PENDING',
        })),
        skipDuplicates: true,
      }),
      prisma.training.update({
        where: {
          id: training.id,
        },
        data: {
          statusId: 'TARGETS_SET',
        },
      }),
    ]);

    return ActionSuccess(true, 'TrainingPlan created successfully');
  } catch (e) {
    console.log(e);
    return ActionFailure('Error creating trainingPlans');
  }
}
