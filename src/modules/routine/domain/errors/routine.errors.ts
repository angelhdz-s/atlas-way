import { DomainError } from '@/shared/domain/errors/domain.errors';

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
