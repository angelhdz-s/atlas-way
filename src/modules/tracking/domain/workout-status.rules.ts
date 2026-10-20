import type { WorkoutStatusId } from '@/modules/tracking/domain/tracking.types';

type ResolveWorkoutFinalStatusInput = {
  totalTargets: number;
  completedTargets: number;
};

/**
 * Resolves the final status of a workout based on its target progress.
 *
 * - `SKIPPED`: no target was completed (or the workout had no targets)
 * - `INTERRUPTED`: at least one target was completed but not all of them
 * - `COMPLETED`: every target was completed
 */
export function resolveWorkoutFinalStatus({
  totalTargets,
  completedTargets,
}: ResolveWorkoutFinalStatusInput): WorkoutStatusId {
  if (totalTargets <= 0) return 'SKIPPED';
  if (completedTargets <= 0) return 'SKIPPED';
  if (completedTargets >= totalTargets) return 'COMPLETED';
  return 'INTERRUPTED';
}
