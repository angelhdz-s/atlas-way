import type { Prisma } from '@/prisma/client';
import { resolveWorkoutTargetStatusAfterSet } from '@/modules/tracking/domain/workout-target-status.rules';

export async function syncWorkoutProgress(tx: Prisma.TransactionClient, workoutId: string) {
  const totalTargets = await tx.workoutTargets.count({
    where: {
      workoutId,
    },
  });

  const completedTargets = await tx.workoutTargets.count({
    where: {
      workoutId,
      statusId: 'COMPLETED',
    },
  });

  return tx.workouts.update({
    where: {
      id: workoutId,
    },
    data: {
      totalTargets,
      completedTargets,
    },
  });
}

export async function syncWorkoutTargetAfterSet(
  tx: Prisma.TransactionClient,
  workoutTargetId: string
) {
  const workoutTarget = await tx.workoutTargets.findUnique({
    where: {
      id: workoutTargetId,
    },
  });

  if (!workoutTarget) return null;

  const completedSets = await tx.workoutSets.count({
    where: {
      workoutTargetId,
    },
  });

  const statusId = resolveWorkoutTargetStatusAfterSet({
    totalSets: workoutTarget.sets,
    completedSets,
  });

  const updatedWorkoutTarget = await tx.workoutTargets.update({
    where: {
      id: workoutTarget.id,
    },
    data: {
      completedSets,
      statusId,
    },
  });

  await syncWorkoutProgress(tx, workoutTarget.workoutId);

  return updatedWorkoutTarget;
}
