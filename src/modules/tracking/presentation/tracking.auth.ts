import type { Workouts, WorkoutTargets } from '@/prisma/client';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { getCurrentUserId } from '@/modules/user/presentation/user.actions';

export type TrackingAuthResult =
  | { success: true; userId: string }
  | { success: false; message: string };

export async function getTrackingUserId(): Promise<TrackingAuthResult> {
  const userIdResult = await getCurrentUserId();
  if (!userIdResult.success) return { success: false, message: userIdResult.message };
  if (!userIdResult.data) return { success: false, message: 'User not found' };

  return { success: true, userId: userIdResult.data };
}

export type OwnedWorkoutResult =
  | { success: true; userId: string; workout: Workouts }
  | { success: false; message: string };

export async function getOwnedWorkout(workoutId: Workouts['id']): Promise<OwnedWorkoutResult> {
  const authResult = await getTrackingUserId();
  if (!authResult.success) return authResult;

  const workout = await prisma.workouts.findUnique({
    where: {
      id: workoutId,
    },
  });

  if (!workout || workout.userId !== authResult.userId) {
    return { success: false, message: 'Workout not found' };
  }

  return { success: true, userId: authResult.userId, workout };
}

export type OwnedWorkoutTargetResult =
  | { success: true; userId: string; workoutTarget: WorkoutTargets; workout: Workouts }
  | { success: false; message: string };

export async function getOwnedWorkoutTarget(
  workoutTargetId: WorkoutTargets['id']
): Promise<OwnedWorkoutTargetResult> {
  const authResult = await getTrackingUserId();
  if (!authResult.success) return authResult;

  const workoutTarget = await prisma.workoutTargets.findUnique({
    where: {
      id: workoutTargetId,
    },
    include: {
      workouts: true,
    },
  });

  if (!workoutTarget || workoutTarget.workouts.userId !== authResult.userId) {
    return { success: false, message: 'Workout target not found' };
  }

  return {
    success: true,
    userId: authResult.userId,
    workoutTarget,
    workout: workoutTarget.workouts,
  };
}
