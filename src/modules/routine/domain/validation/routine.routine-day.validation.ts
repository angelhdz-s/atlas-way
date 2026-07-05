import type { ValidationFunction } from '@/shared/shared.types';
import type { RoutinePlanDayFactory } from '@/modules/routine/domain/routine.types';
import { isObject } from '@/shared/domain/validation/validation.non-primitives';
import { isString } from '@/shared/domain/validation/validation.primitives';
import { isKeyOf } from '@/shared/domain/validation/validation.utils';
import { isValidRoutineDays } from '@/modules/routine/domain/validation/routine.validation.utils';
import { isValidSessionId } from '@/modules/session/domain/validation/session.validation.utils';

function isValidRoutineDayDay(day: unknown): boolean {
  if (day === 0) return true;
  return isValidRoutineDays(day);
}

function isValidRoutineDayName(name: unknown): boolean {
  return isString(name);
}

function isValidRoutineDaySessionId(sessionId: unknown): boolean {
  return sessionId === null || isValidSessionId(sessionId);
}

type RawRoutineDaysValidations = {
  [K in keyof RoutinePlanDayFactory]: ValidationFunction;
};

const factoryRoutineDaysInputValidation: RawRoutineDaysValidations = {
  day: isValidRoutineDayDay,
  name: isValidRoutineDayName,
  sessionId: isValidRoutineDaySessionId,
};

export function isValidFactoryRoutineRoutineDayInput(routineDay: unknown): boolean {
  if (!isObject(routineDay)) return true;
  const routineDayKeys = Object.keys(
    factoryRoutineDaysInputValidation
  ) as (keyof RawRoutineDaysValidations)[];

  for (const key of routineDayKeys) {
    if (!isKeyOf(key, routineDay)) return false;
    const value = routineDay[key];
    const validate = factoryRoutineDaysInputValidation[key] as ValidationFunction;
    if (!validate(value)) return false;
  }
  return true;
}
