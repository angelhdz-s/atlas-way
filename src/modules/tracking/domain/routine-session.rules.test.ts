import {
  getRoutineDayNumber,
  resolveRoutineSessionForDate,
  toDateOnly,
  todayDateOnly,
} from '@/modules/tracking/domain/routine-session.rules';

describe('toDateOnly', () => {
  it('keeps the UTC calendar day', () => {
    expect(toDateOnly(new Date('2025-07-04T18:30:00.000Z')).toISOString()).toBe(
      '2025-07-04T00:00:00.000Z'
    );
  });
});

describe('todayDateOnly', () => {
  it('returns the local calendar day at UTC midnight', () => {
    const date = new Date(2025, 6, 4, 23, 30);
    expect(todayDateOnly(date).toISOString()).toBe('2025-07-04T00:00:00.000Z');
  });
});

describe('getRoutineDayNumber', () => {
  it('returns the first plan day on the initial date', () => {
    expect(
      getRoutineDayNumber(
        new Date('2025-07-01T00:00:00.000Z'),
        new Date('2025-07-01T00:00:00.000Z'),
        7
      )
    ).toBe(1);
  });

  it('wraps the cycle after the last day', () => {
    expect(
      getRoutineDayNumber(
        new Date('2025-07-01T00:00:00.000Z'),
        new Date('2025-07-08T00:00:00.000Z'),
        7
      )
    ).toBe(1);
  });

  it('returns null when the routine has no days', () => {
    expect(
      getRoutineDayNumber(
        new Date('2025-07-01T00:00:00.000Z'),
        new Date('2025-07-08T00:00:00.000Z'),
        0
      )
    ).toBeNull();
  });
});

describe('resolveRoutineSessionForDate', () => {
  const routine = { initialDate: new Date('2025-07-01T00:00:00.000Z'), days: 3 };
  const plan = [
    { day: 1, sessionId: 'push' },
    { day: 2, sessionId: null },
    { day: 3, sessionId: 'legs' },
  ];

  it('returns the planned session for the matching day', () => {
    expect(
      resolveRoutineSessionForDate({
        routine,
        plan,
        date: new Date('2025-07-03T00:00:00.000Z'),
      })
    ).toEqual({ dayNumber: 3, sessionId: 'legs' });
  });

  it('returns null session for rest days', () => {
    expect(
      resolveRoutineSessionForDate({
        routine,
        plan,
        date: new Date('2025-07-05T00:00:00.000Z'),
      })
    ).toEqual({ dayNumber: 2, sessionId: null });
  });
});
