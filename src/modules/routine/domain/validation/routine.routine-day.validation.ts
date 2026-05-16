import type { ValidationFunction } from '@/shared/shared.types';
import type { RoutineDay } from '@/modules/routine/domain/routine.types';
import { isObject } from '@/shared/domain/validation/validation.non-primitives';
import { isString } from '@/shared/domain/validation/validation.primitives';
import { isKeyOf, isValidUuid } from '@/shared/domain/validation/validation.utils';
import { Session } from '@/modules/session/domain/session.entity';
import { isValidRoutineDays } from '@/modules/routine/domain/validation/routine.validation.utils';

const isValidRoutineDayId: ValidationFunction = (id: unknown) => {
  return isValidUuid(id);
};

const isValidRoutineDayDay: ValidationFunction = (day: unknown) => {
  return isValidRoutineDays(day);
};

const isValidRoutineDaySession: ValidationFunction = (session: unknown) => {
  if (session === null) return true;
  return session instanceof Session;
};

const isValidRoutineDayName: ValidationFunction = (name: unknown) => {
  return isString(name);
};

type RoutineDaysValidations = {
  [K in keyof RoutineDay]: ValidationFunction;
};

const routineDaysValidation: RoutineDaysValidations = {
  id: isValidRoutineDayId,
  day: isValidRoutineDayDay,
  name: isValidRoutineDayName,
  session: isValidRoutineDaySession,
};

export const isValidRoutineRoutineDay: ValidationFunction = (routineDay: unknown) => {
  if (!isObject(routineDay)) return true;
  const routineDayKeys = Object.keys(routineDaysValidation) as (keyof RoutineDay)[];

  for (const key of routineDayKeys) {
    if (!isKeyOf(key, routineDay)) return false;

    const value = routineDay[key];
    const validate = routineDaysValidation[key] as ValidationFunction;
    if (!validate(value)) return false;
  }
  return true;
};
