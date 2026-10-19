type RoutinePlanDayLike = {
  day: number;
  sessionId: string | null;
};

type RoutineLike = {
  initialDate: Date;
  days: number;
};

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export function toDateOnly(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

export function todayDateOnly(now: Date = new Date()): Date {
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

export function getRoutineDayNumber(initialDate: Date, date: Date, days: number): number | null {
  if (days <= 0) return null;

  const initialDateOnly = toDateOnly(initialDate);
  const targetDateOnly = toDateOnly(date);
  const elapsedDays = Math.floor(
    (targetDateOnly.getTime() - initialDateOnly.getTime()) / MILLISECONDS_PER_DAY
  );
  const dayIndex = ((elapsedDays % days) + days) % days;

  return dayIndex + 1;
}

export function resolveRoutineSessionForDate({
  routine,
  plan,
  date,
}: {
  routine: RoutineLike;
  plan: RoutinePlanDayLike[];
  date: Date;
}): { dayNumber: number; sessionId: string | null } | null {
  const dayNumber = getRoutineDayNumber(routine.initialDate, date, routine.days);
  if (dayNumber === null) return null;

  const planDay = plan.find((p) => p.day === dayNumber);
  if (!planDay) return null;

  return {
    dayNumber,
    sessionId: planDay.sessionId,
  };
}
