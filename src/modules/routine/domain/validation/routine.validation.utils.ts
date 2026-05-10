import {
  isArray,
  isBoolean,
  isDate,
  isIntegerNumber,
  isString,
  isValidUuid,
} from '@/shared/domain/validation.utils';
import {
  ROUTINE_DAYS_LENGTH,
  ROUTINE_DESCRIPTION_LENGTH,
  ROUTINE_NAME_LENGTH,
} from '@/modules/routine/domain/validation/routine.validation.constants';
import { isValidRoutineRoutineDay } from '@/modules/routine/domain/validation/routine.routine-day.validation';
import type { ValidationFunction } from '@/shared/shared.types';

export const isValidRoutineId: ValidationFunction = (id: unknown) => {
  return isValidUuid(id);
};

export const isValidRoutineName: ValidationFunction = (name: unknown) => {
  if (!isString(name)) return false;
  const trimName = name.trim();
  if (trimName.length < ROUTINE_NAME_LENGTH.min) return false;
  return trimName.length <= ROUTINE_NAME_LENGTH.max;
};

export const isValidRoutineDescription: ValidationFunction = (description: unknown) => {
  if (description === null) return true;
  if (!isString(description)) return false;
  const trimDescription = description.trim();
  if (trimDescription.length < ROUTINE_DESCRIPTION_LENGTH.min) return false;
  return trimDescription.length <= ROUTINE_DESCRIPTION_LENGTH.max;
};

export const isValidRoutineInitialDate: ValidationFunction = (initialDate: unknown) => {
  return isDate(initialDate);
};

export const isValidRoutineActive: ValidationFunction = (active: unknown) => {
  return isBoolean(active);
};

export const isValidRoutineDays: ValidationFunction = (days: unknown) => {
  if (!isIntegerNumber(days)) return false;
  if (days < ROUTINE_DAYS_LENGTH.min) return false;
  return days <= ROUTINE_DAYS_LENGTH.max;
};

export const areValidRoutineRoutineDays: ValidationFunction = (routineDays: unknown) => {
  if (!isArray(routineDays)) return false;
  for (const routineDay of routineDays) {
    if (!isValidRoutineRoutineDay(routineDay)) return false;
  }
  return true;
};
