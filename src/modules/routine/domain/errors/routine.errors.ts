import { DomainError } from '@/shared/domain/errors/domain.errors';
import type { RoutineInvalidDataErrorCodes } from './routine.error.code';

export class RoutineNotFoundError extends DomainError {
  constructor() {
    super('ROUTINE_NOT_FOUND');
  }
}

export class RoutineCycleNotFound extends DomainError {
  constructor() {
    super('ROUTINE_CYCLE_NOT_FOUND');
  }
}

export class RoutineOwnershipError extends DomainError {
  constructor() {
    super('ROUTINE_OWNERSHIP_ERROR');
  }
}

export class InvalidRoutineDays extends DomainError {
  constructor() {
    super('INVALID_ROUTINE_DAYS');
  }
}

export class InvalidRoutineData extends DomainError {
  constructor(readonly error_code: RoutineInvalidDataErrorCodes | undefined = undefined) {
    if (!error_code) {
      super('INVALID_ROUTINE_DATA');
    } else {
      super(`INVALID_ROUTINE_DATA.${error_code}`);
    }
  }
}
