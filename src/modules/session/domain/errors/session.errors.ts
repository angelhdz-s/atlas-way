import type { SessionInvalidDataCodes } from '@/modules/session/domain/errors/session.error.code';
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

export class InvalidSessionData extends DomainError {
  constructor(readonly field: SessionInvalidDataCodes | null = null) {
    super(field ? `INVALID_SESSION_DATA.${field}` : 'INVALID_SESSION_DATA');
  }
}
