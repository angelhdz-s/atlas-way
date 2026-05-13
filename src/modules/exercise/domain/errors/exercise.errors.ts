import type { ExerciseInvalidDataErrorCodes } from '@/modules/exercise/domain/errors/exercise.error.code';
import { DomainError } from '@/shared/domain/errors/domain.errors';

export class ExerciseNotFoundError extends DomainError {
  constructor() {
    super('EXERCISE_NOT_FOUND');
  }
}

export class ExerciseOwnershipError extends DomainError {
  constructor() {
    super('EXERCISE_OWNERSHIP_ERROR');
  }
}

export class InvalidExerciseData extends DomainError {
  constructor(readonly error_code: ExerciseInvalidDataErrorCodes | undefined = undefined) {
    if (!error_code) {
      super('INVALID_EXERCISE_DATA');
    } else {
      super(`INVALID_EXERCISE_DATA.${error_code}`);
    }
  }
}
