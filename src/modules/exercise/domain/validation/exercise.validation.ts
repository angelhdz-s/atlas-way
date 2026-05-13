import { Failure, Success } from '@/shared/domain/result';
import { isKeyOf, isObject, isValidUuid } from '@/shared/domain/validation.utils';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import {
  isValidExerciseDescription,
  isValidExerciseName,
  isValidExerciseReps,
  isValidExerciseSets,
  isValidExerciseWeight,
} from '@/modules/exercise/domain/validation/exercise.validation.utils';
import { InvalidExerciseData } from '@/modules/exercise/domain/errors/exercise.errors';
import type { ValidationFunction } from '@/shared/shared.types';
import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

type ExerciseKeys = Omit<ExerciseProps, 'createdAt' | 'updatedAt' | 'userId' | 'muscles'>;

type ExerciseValidators = {
  [K in keyof ExerciseKeys]: {
    validate: ValidationFunction;
    error: DomainError;
  };
};

// ToDo: update each field with relevant domain errors
export const exerciseValidators: ExerciseValidators = {
  id: {
    validate: isValidUuid,
    error: new InvalidExerciseData(),
  },
  name: {
    validate: isValidExerciseName,
    error: new InvalidExerciseData('NAME'),
  },
  description: {
    validate: isValidExerciseDescription,
    error: new InvalidExerciseData('DESCRIPTION'),
  },
  sets: {
    validate: isValidExerciseSets,
    error: new InvalidExerciseData('SETS'),
  },
  reps: {
    validate: isValidExerciseReps,
    error: new InvalidExerciseData('REPS'),
  },
  weight: {
    validate: isValidExerciseWeight,
    error: new InvalidExerciseData('WEIGHT'),
  },
};

export type ExerciseMinimumProps = Omit<ExerciseProps, 'createdAt' | 'updatedAt'>;
export function validateExercise(exercise: ExerciseMinimumProps): Result<Exercise, DomainError> {
  if (!isObject(exercise)) return Failure(new InvalidExerciseData());
  const exerciseValidationKeys = Object.keys(exerciseValidators) as (keyof ExerciseValidators)[];
  for (const key of exerciseValidationKeys) {
    if (!isKeyOf(key, exercise)) return Failure(new InvalidExerciseData());
    const validate = exerciseValidators[key].validate;
    if (!validate(exercise[key])) return Failure(exerciseValidators[key].error);
  }

  const domainExercise = new Exercise({
    id: exercise.id,
    name: exercise.name,
    description: exercise.description,
    sets: exercise.sets,
    reps: exercise.reps,
    weight: exercise.weight,
    muscles: exercise.muscles,
    userId: exercise.userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return Success(domainExercise);
}
