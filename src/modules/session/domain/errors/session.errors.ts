import { DomainError } from '@/shared/domain/errors/domain.errors';

export class SessionNotFoundError extends DomainError {
  constructor() {
    super('SESSION_NOT_FOUND');
  }
}

export class SessionOwnershipError extends DomainError {
  constructor() {
    super('SESSION_OWNERSHIP_ERROR');
  }
}
