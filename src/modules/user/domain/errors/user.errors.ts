import { DomainError } from '@/shared/domain/errors/domain.errors';
import type { UserInvalidDataErrorCodes } from '@/modules/user/domain/errors/user.error.code';

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

export class InvalidUserData extends DomainError {
  constructor(readonly error_code: UserInvalidDataErrorCodes | undefined = undefined) {
    if (!error_code) {
      super('INVALID_USER_DATA');
    } else {
      super(`INVALID_USER_DATA.${error_code}`);
    }
  }
}
