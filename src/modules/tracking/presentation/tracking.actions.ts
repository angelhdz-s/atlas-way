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
  workoutTargetsSchema,
  type WorkoutTargetsForm,
} from '@/modules/tracking/presentation/schemas/workout-targets.schema';
import {
  workoutSetSchema,
  type WorkoutSetForm,
} from '@/modules/tracking/presentation/schemas/workout.schema';

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

export async function getWorkoutSetsByWorkoutId(
  workoutId: Workouts['id']
): Promise<ActionResponseProps<WorkoutSets[]>> {
  try {
    const workoutSets = await prisma.workoutSets.findMany({
      where: {
        workoutId,
      },
    });

    return ActionSuccess(workoutSets, 'Workout sets fetched successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.log(e);
    return ActionFailure('Workout sets not found');
  }
}

/**
 * Initial base method for wizard tests
 */
export async function processWorkoutSetData(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const workoutSetDataParsed = workoutSetSchema.safeParse(data);
  if (!workoutSetDataParsed.success)
    return ActionFailure('Error saving workout set data: Invalid data');

  const workoutSetData = workoutSetDataParsed.data;

  // If already has an id that means it needs to be updated
  if (workoutSetData.id !== undefined) {
    const updateWorkoutSetResult = await updateWorkoutSet(workoutSetData as WorkoutSetFormWithId);
    if (!updateWorkoutSetResult.success) return updateWorkoutSetResult;
    const updatedWorkoutSet = updateWorkoutSetResult.data;

    return ActionSuccess(updatedWorkoutSet, 'Workout set data saved successfully');
  }

  // When it doesn't have an id that means it was not created yet
  const createWorkoutSetResult = await createWorkoutSet(workoutSetData);
  if (!createWorkoutSetResult.success) return createWorkoutSetResult;
  const createdWorkoutSet = createWorkoutSetResult.data;

  return ActionSuccess(createdWorkoutSet, 'Set data created successfully');
}

type WorkoutSetFormWithId = WorkoutSetForm & {
  id: string;
};

export async function createWorkoutSet(
  data: WorkoutSetForm
): Promise<ActionResponseProps<WorkoutSets>> {
  const workoutSetParsed = workoutSetSchema.safeParse(data);
  if (!workoutSetParsed.success) return ActionFailure('Invalid data');

  const workoutSetData = workoutSetParsed.data;

  try {
    // Find exercise ID required in trainingSet creation
    const workoutTarget = await prisma.workoutTargets.findUnique({
      where: {
        id: workoutSetData.workoutId,
      },
      select: {
        exerciseId: true,
      },
    });

    // If training plan doesn't exist return a failure
    if (!workoutTarget) return ActionFailure('Workout target not found');

    const id = randomUUID();
    const workoutSet = await prisma.workoutSets.create({
      data: {
        id,
        reps: workoutSetData.reps,
        set: workoutSetData.set,
        weight: workoutSetData.weight,
        workoutId: workoutSetData.workoutId,
        exerciseId: workoutTarget.exerciseId,
      },
    });

    return ActionSuccess(workoutSet, 'Workout set created successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.error(e);
    return ActionFailure('Error creating workout set');
  }
}

export async function updateWorkoutSet(
  data: WorkoutSetFormWithId
): Promise<ActionResponseProps<WorkoutSets>> {
  const workoutSetParsed = workoutSetSchema.safeParse(data);
  if (!workoutSetParsed.success) return ActionFailure('Invalid data');

  const workoutSetData = workoutSetParsed.data as WorkoutSetFormWithId;

  try {
    // Find the already saved training set
    const workoutSet = await prisma.workoutSets.findUnique({
      where: {
        id: workoutSetData.id,
      },
    });

    if (!workoutSet) return ActionFailure('Workout set not found');

    const updatedWorkoutSet = await prisma.workoutSets.update({
      where: {
        id: workoutSetData.id,
      },
      data: {
        ...workoutSet,
        reps: workoutSetData.reps,
        weight: workoutSetData.weight,
      },
    });

    return ActionSuccess(updatedWorkoutSet, 'Workout set updated successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.error(e);
    return ActionFailure('Error updating workout set');
  }
}
