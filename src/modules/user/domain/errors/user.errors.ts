import { DomainError } from '@/shared/domain/errors/domain.errors';

export class UserNotFoundError extends DomainError {
  constructor() {
    super('USER_NOT_FOUND');
  }
}

export class RoleNotFound extends DomainError {
  constructor() {
    super('ROLE_NOT_FOUND');
  }
}
