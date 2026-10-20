import { resolveWorkoutFinalStatus } from '@/modules/tracking/domain/workout-status.rules';

describe('resolveWorkoutFinalStatus', () => {
  it('returns SKIPPED when the workout has no targets', () => {
    expect(resolveWorkoutFinalStatus({ totalTargets: 0, completedTargets: 0 })).toBe('SKIPPED');
  });

  it('returns SKIPPED when no target was completed', () => {
    expect(resolveWorkoutFinalStatus({ totalTargets: 4, completedTargets: 0 })).toBe('SKIPPED');
  });

  it('returns INTERRUPTED when only some targets were completed', () => {
    expect(resolveWorkoutFinalStatus({ totalTargets: 4, completedTargets: 2 })).toBe('INTERRUPTED');
  });

  it('returns COMPLETED when every target was completed', () => {
    expect(resolveWorkoutFinalStatus({ totalTargets: 4, completedTargets: 4 })).toBe('COMPLETED');
  });

  it('returns COMPLETED when completed targets exceed the total', () => {
    expect(resolveWorkoutFinalStatus({ totalTargets: 4, completedTargets: 5 })).toBe('COMPLETED');
  });
});
