import { Success } from '@/shared/domain/result';
import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { AuthSession } from '@/modules/auth/domain/auth-session.types';

/**
 * @property session: An `AuthSession` | `null` type to control fake-active session
 */
export class MockAuthRepository implements IAuthRepository {
  public session: AuthSession | null = null;
  async getSession(): RepositoryResult<AuthSession | null> {
    return Success(this.session);
  }
}
