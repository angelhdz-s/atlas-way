import { DomainError } from '@/shared/domain/errors/domain.errors';

export class MuscleNotFoundError extends DomainError {
  constructor() {
    super('MUSCLE_NOT_FOUND');
  }
}

export class InvalidMuscleData extends DomainError {
  constructor() {
    super('INVALID_MUSCLE_DATA');
  }
}
