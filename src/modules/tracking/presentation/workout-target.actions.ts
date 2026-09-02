import {
  workoutTargetsSchema,
  type WorkoutTargetsForm,
} from '@/modules/tracking/presentation/schemas/workout-targets.schema';
import { getWorkoutById } from '@/modules/tracking/presentation/workout.actions';
import type { Prisma } from '@/prisma/client';
import { prisma } from '@/shared/infrastructure/prisma/client';
import {
  ActionFailure,
  ActionSuccess,
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
