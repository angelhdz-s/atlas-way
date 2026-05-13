import type { Result } from '@/shared/domain/result';
import type { ExerciseMethods } from '@/modules/exercise/domain/exercise.types';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import { Failure, Success } from '@/shared/domain/result';
import { isKeyOf, isObject } from '@/shared/domain/validation.utils';
import { InvalidExerciseData } from '@/modules/exercise/domain/errors/exercise.errors';

type UpdateExerciseKeys = Omit<UpdateExerciseInput, 'muscleIds'>;

type UpdateOperations = {
  [K in keyof UpdateExerciseKeys]: keyof ExerciseMethods;
};

const updateOperations: UpdateOperations = {
  name: 'changeName',
  description: 'changeDescription',
  sets: 'changeSets',
  reps: 'changeReps',
  weight: 'changeWeight',
};

export function updateExercise(
  data: UpdateExerciseInput,
  exercise: Exercise
): Result<Exercise, DomainError> {
  if (!isObject(data)) return Failure(new InvalidExerciseData());
  const dataKeys = Object.keys(data) as (keyof UpdateExerciseInput)[];

  for (const key of dataKeys) {
    if (!isKeyOf(key, updateOperations)) continue;
    if (!isKeyOf(key, data)) continue;

    const value = data[key] as never;
    const method = updateOperations[key] as keyof ExerciseMethods;
    const updateResult = exercise[method](value);
    if (!updateResult.success) return updateResult;
  }

  return Success(exercise);
}
