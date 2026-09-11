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
import {
  finishWorkoutTarget,
  setWorkoutTargetInProgress,
} from '@/modules/tracking/presentation/workout-target.actions';

// ToDo: add session validation at the top of the actions
// const session = await getServerSession();
// if (!session) return ActionFailure('Unauthorized');

export async function getWorkoutSetsByWorkoutId(
  workoutId: Workouts['id']
): Promise<ActionResponseProps<WorkoutSets[]>> {
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

    const workoutSets = workout?.workoutTargets.flatMap((w) => w.workoutSets) ?? [];

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

  // When Workout Set doesn't have an id that means it was not created yet
  const createWorkoutSetResult = await createWorkoutSet(workoutSetData);
  if (!createWorkoutSetResult.success) return createWorkoutSetResult;
  const createdWorkoutSet = createWorkoutSetResult.data;

  try {
    const workoutTarget = await prisma.workoutTargets.findFirst({
      where: {
        id: createdWorkoutSet.workoutTargetId,
      },
    });

    if (!workoutTarget) return ActionFailure('No workout target found');

    // Current Workout target in Progress
    const isSetMinorThanTargetSets = createdWorkoutSet.set < workoutTarget.sets;
    if (isSetMinorThanTargetSets && workoutTarget.statusId !== 'IN_PROGRESS') {
      // Update current status of the Workout Target
      const updatedWorkoutTargetResult = await setWorkoutTargetInProgress(workoutTarget);
      if (!updatedWorkoutTargetResult.success) return updatedWorkoutTargetResult;
      return ActionSuccess(createdWorkoutSet, 'Set data created successfully');
    }

    const isSetEqualToTargetSets = createdWorkoutSet.set === workoutTarget.sets;
    if (isSetEqualToTargetSets && workoutTarget.statusId === 'IN_PROGRESS') {
      const finishWorkoutTargetResult = await finishWorkoutTarget(workoutTarget);
      if (!finishWorkoutTargetResult.success) return finishWorkoutTargetResult;
      return ActionSuccess(createdWorkoutSet, 'Set data created successfully');
    }

    const newCompletedSets = workoutTarget.completedSets ? workoutTarget.completedSets + 1 : 1;
    const updatedWorkoutTarget = await prisma.workoutTargets.update({
      where: {
        id: workoutTarget.id,
      },
      data: {
        ...workoutTarget,
        completedSets: newCompletedSets,
      },
    });

    if (!updatedWorkoutTarget)
      return ActionFailure('Workout set. Error updating target completed sets');

    return ActionSuccess(createdWorkoutSet, 'Set data created successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.log(e);
    return ActionFailure('Workout Set. Error processing set');
  }
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
        id: workoutSetData.workoutTargetId,
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
        workoutTargetId: workoutSetData.workoutTargetId,
        exerciseId: workoutTarget.exerciseId,
      },
    });

    return ActionSuccess(workoutSet, 'Workout set created successfully');
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: Server error logs
    console.log(e);
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
    console.log(e);
    return ActionFailure('Error updating workout set');
  }
}
