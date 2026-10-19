import type { WorkoutTargetStatusId } from '@/modules/tracking/domain/tracking.types';

type WorkoutTargetProgressInput = {
  totalSets: number;
  completedSets: number;
};

/**
 * Resolves the status of a workout target after a set was created or updated.
 *
 * - `PENDING`: no sets completed yet
 * - `IN_PROGRESS`: some sets completed but not all of them
 * - `COMPLETED`: every set was completed
 * - `SKIPPED`: the target has no sets
 */
export function resolveWorkoutTargetStatusAfterSet({
  totalSets,
  completedSets,
}: WorkoutTargetProgressInput): WorkoutTargetStatusId {
  if (totalSets <= 0) return 'SKIPPED';
  if (completedSets <= 0) return 'PENDING';
  if (completedSets >= totalSets) return 'COMPLETED';
  return 'IN_PROGRESS';
}

/**
 * Resolves the final status of a workout target when the user ends the phase.
 *
 * - `SKIPPED`: no sets completed
 * - `INTERRUPTED`: some sets completed but not all of them
 * - `COMPLETED`: every set was completed
 */
export function resolveWorkoutTargetFinalStatus({
  totalSets,
  completedSets,
}: WorkoutTargetProgressInput): WorkoutTargetStatusId {
  if (totalSets <= 0 || completedSets <= 0) return 'SKIPPED';
  if (completedSets >= totalSets) return 'COMPLETED';
  return 'INTERRUPTED';
}

export function canReopenWorkoutTarget(status: WorkoutTargetStatusId): boolean {
  return status === 'SKIPPED' || status === 'INTERRUPTED';
}

export function resolveReopenedWorkoutTargetStatus(completedSets: number): WorkoutTargetStatusId {
  return completedSets > 0 ? 'IN_PROGRESS' : 'PENDING';
}
