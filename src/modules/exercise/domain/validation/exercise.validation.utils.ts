import { isIntegerNumber, isNumber, isString } from '@/shared/domain/validation.utils';
import {
  EXERCISE_DESCRIPTION_LENGTH,
  EXERCISE_NAME_LENGTH,
  EXERCISE_REPS_RANGE,
  EXERCISE_SETS_RANGE,
} from '@/modules/exercise/domain/validation/exercise.validation.constants';
import type { ValidationFunction } from '@/shared/shared.types';

export const isValidExerciseName: ValidationFunction = (name: unknown) => {
  if (!isString(name)) return false;
  const trimName = name.trim();
  if (trimName.length < EXERCISE_NAME_LENGTH.min) return false;
  return trimName.length <= EXERCISE_NAME_LENGTH.max;
};

export const isValidExerciseDescription: ValidationFunction = (description: unknown) => {
  if (description === null) return true;
  if (!isString(description)) return false;
  const trimDescription = description.trim();
  if (trimDescription.length < EXERCISE_DESCRIPTION_LENGTH.min) return false;
  return trimDescription.length <= EXERCISE_DESCRIPTION_LENGTH.max;
};

export const isValidExerciseSets: ValidationFunction = (sets: unknown) => {
  if (!isIntegerNumber(sets)) return false;
  return sets >= EXERCISE_SETS_RANGE.min;
};

export const isValidExerciseReps: ValidationFunction = (reps: unknown) => {
  if (!isIntegerNumber(reps)) return false;
  return reps >= EXERCISE_REPS_RANGE.min;
};

export const isValidExerciseWeight: ValidationFunction = (weight: unknown) => {
  if (!isNumber(weight)) return false;
  return weight >= EXERCISE_REPS_RANGE.min;
};
