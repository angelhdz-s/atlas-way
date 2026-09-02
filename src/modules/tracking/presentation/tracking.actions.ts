'use server';

import { randomUUID } from 'node:crypto';
import type { Prisma, Workouts, WorkoutSets } from '@/prisma/client';
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
import {
  workoutSetSchema,
  type WorkoutSetForm,
} from '@/modules/tracking/presentation/schemas/workout.schema';

export async function getTodaysTraining(): Promise<ActionResponseProps<Workouts>> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getDate() + 1);

  const todayTraining = await prisma.workouts.findFirst({
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

export async function createTraining(): Promise<ActionResponseProps<Workouts>> {
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
    const training = await prisma.workouts.create({
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
): Promise<ActionResponseProps<Workouts | null>> {
  try {
    const training = await prisma.workouts.findUnique({
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
  const parseResult = exerciseTargetsSchema.safeParse(data);
  if (!parseResult.success) {
    return ActionFailure('Invalid data');
  }

  const training = await prisma.workouts.findUnique({
    where: {
      id: data.trainingId,
    },
  });

  if (!training) {
    return ActionFailure('Training not found');
  }

  if (training.statusId !== 'PENDING') {
    const status = training.statusId;
    return ActionFailure(`Training was ${status}`);
  }

  try {
    await prisma.$transaction([
      prisma.workoutTargets.createMany({
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
      prisma.workouts.update({
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
    // biome-ignore lint/suspicious/noConsole: Error details for server
    console.log(e);
    return ActionFailure('Error creating trainingPlans');
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
    workoutSets: true,
  },
} satisfies Prisma.WorkoutTargetsDefaultArgs;

export type FullTrainingPlan = Prisma.WorkoutTargetsGetPayload<typeof workoutTargetsAnatomy>;

export async function getTrainingPlansByTrainingId(
  trainingId: string
): Promise<ActionResponseProps<FullTrainingPlan[]>> {
  const trainingResult = await getTrainingById(trainingId);
  if (!trainingResult.success) return trainingResult;
  if (!trainingResult.data) return ActionFailure('Training not found');

  try {
    const trainingPlans = await prisma.workoutSets.findMany({
      where: {
        trainingId,
      },
      ...workoutTargetsAnatomy,
    });
    return ActionSuccess(trainingPlans, 'Training plans found');
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: Error details for server
    console.log(error);
    return ActionFailure('Error getting training plans');
  }
}

/**
 * Initial base method for wizard tests
 */
export async function processSetFormData(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const setDataParsed = workoutSetSchema.safeParse(data);
  if (!setDataParsed.success) return ActionFailure('Error saving set data. Invalid data');

  const setData = setDataParsed.data;

  // If already has an id that means it needs to be updated
  if (setData.id !== undefined) {
    const updateTrainingSetResult = await updateTrainingSet(setData as SetFormWithId);
    if (!updateTrainingSetResult.success) return updateTrainingSetResult;
    const updatedTrainingSet = updateTrainingSetResult.data;

    return ActionSuccess(updatedTrainingSet, 'Set data saved successfully');
  }

  // When it doesn't have an id that means it was not created yet
  const createTrainingSetResult = await createTrainingSet(setData);
  if (!createTrainingSetResult.success) return createTrainingSetResult;
  const createdTrainingSet = createTrainingSetResult.data;

  return ActionSuccess(createdTrainingSet, 'Set data created successfully');
}

type SetFormWithId = WorkoutSetForm & {
  id: string;
};

export async function createTrainingSet(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const parsedDataResult = workoutSetSchema.safeParse(data);
  if (!parsedDataResult.success) return ActionFailure('Invalid data');

  const setData = parsedDataResult.data;

  try {
    // Find exercise ID required in trainingSet creation
    const trainingPlan = await prisma.trainingPlan.findUnique({
      where: {
        id: setData.trainingPlanId,
      },
      select: {
        exerciseId: true,
      },
    });

    // If training plan doesn't exist return a failure
    if (!trainingPlan) return ActionFailure('Training target not found');

    const id = randomUUID();
    const trainingSet = await prisma.workoutSets.create({
      data: {
        id,
        reps: setData.reps,
        set: setData.set,
        weight: setData.weight,
        trainingPlanId: setData.trainingPlanId,
        exerciseId: trainingPlan.exerciseId,
        statusId: 'COMPLETED',
      },
    });

    return ActionSuccess(trainingSet, 'Training set created successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.error(e);
    return ActionFailure('Error creating set');
  }
}

export async function updateTrainingSet(
  data: SetFormWithId
): Promise<ActionResponseProps<WorkoutSets>> {
  const parsedDataResult = workoutSetSchema.safeParse(data);
  if (!parsedDataResult.success) return ActionFailure('Invalid data');

  const setData = parsedDataResult.data as SetFormWithId;

  try {
    // Find the already saved training set
    const trainingSet = await prisma.workoutSets.findUnique({
      where: {
        id: setData.id,
      },
    });

    if (!trainingSet) return ActionFailure('Training set not found');

    const updatedTrainingSet = await prisma.trainingSets.update({
      where: {
        id: setData.id,
      },
      data: {
        ...trainingSet,
        reps: setData.reps,
        weight: setData.weight,
      },
    });

    return ActionSuccess(updatedTrainingSet, 'Training set updated successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.error(e);
    return ActionFailure('Error updating set');
  }
}
