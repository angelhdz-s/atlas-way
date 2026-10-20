import {
  canReopenWorkoutTarget,
  resolveReopenedWorkoutTargetStatus,
  resolveWorkoutTargetFinalStatus,
  resolveWorkoutTargetStatusAfterSet,
} from '@/modules/tracking/domain/workout-target-status.rules';

describe('resolveWorkoutTargetStatusAfterSet', () => {
  it('returns SKIPPED when the target has no sets', () => {
    expect(resolveWorkoutTargetStatusAfterSet({ totalSets: 0, completedSets: 0 })).toBe('SKIPPED');
  });

  it('returns PENDING when no sets were completed', () => {
    expect(resolveWorkoutTargetStatusAfterSet({ totalSets: 4, completedSets: 0 })).toBe('PENDING');
  });

  it('returns IN_PROGRESS when some sets were completed', () => {
    expect(resolveWorkoutTargetStatusAfterSet({ totalSets: 4, completedSets: 2 })).toBe(
      'IN_PROGRESS'
    );
  });

  it('returns COMPLETED when every set was completed', () => {
    expect(resolveWorkoutTargetStatusAfterSet({ totalSets: 4, completedSets: 4 })).toBe(
      'COMPLETED'
    );
  });

  it('handles single-set targets', () => {
    expect(resolveWorkoutTargetStatusAfterSet({ totalSets: 1, completedSets: 1 })).toBe(
      'COMPLETED'
    );
  });
});

describe('resolveWorkoutTargetFinalStatus', () => {
  it('returns SKIPPED when no sets were completed', () => {
    expect(resolveWorkoutTargetFinalStatus({ totalSets: 4, completedSets: 0 })).toBe('SKIPPED');
  });

  it('returns INTERRUPTED when some sets were completed', () => {
    expect(resolveWorkoutTargetFinalStatus({ totalSets: 4, completedSets: 2 })).toBe('INTERRUPTED');
  });

  it('returns COMPLETED when every set was completed', () => {
    expect(resolveWorkoutTargetFinalStatus({ totalSets: 4, completedSets: 4 })).toBe('COMPLETED');
  });
});

describe('canReopenWorkoutTarget', () => {
  it('allows reopening skipped and interrupted targets', () => {
    expect(canReopenWorkoutTarget('SKIPPED')).toBe(true);
    expect(canReopenWorkoutTarget('INTERRUPTED')).toBe(true);
  });

  it('does not allow reopening completed or in-progress targets', () => {
    expect(canReopenWorkoutTarget('COMPLETED')).toBe(false);
    expect(canReopenWorkoutTarget('IN_PROGRESS')).toBe(false);
    expect(canReopenWorkoutTarget('PENDING')).toBe(false);
  });
});

describe('resolveReopenedWorkoutTargetStatus', () => {
  it('returns PENDING when there are no completed sets', () => {
    expect(resolveReopenedWorkoutTargetStatus(0)).toBe('PENDING');
  });

  it('returns IN_PROGRESS when there are completed sets', () => {
    expect(resolveReopenedWorkoutTargetStatus(2)).toBe('IN_PROGRESS');
  });
});
