'use server';

import { randomUUID } from 'node:crypto';
import type { Workouts, WorkoutSets } from '@/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponseProps,
} from '@/shared/presentation/action.response';
import { prisma } from '@/shared/infrastructure/prisma/client';
import {
  workoutSetSchema,
  type WorkoutSetForm,
} from '@/modules/tracking/presentation/schemas/workout.schema';

// ToDo: add session validation at the top of the actions
// const session = await getServerSession();
// if (!session) return ActionFailure('Unauthorized');

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
