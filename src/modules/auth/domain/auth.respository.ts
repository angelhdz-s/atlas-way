import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { AuthSession } from '@/modules/auth/domain/errors/auth-session.types';

export interface IAuthRepository {
  getSession(): RepositoryResult<AuthSession | null>;
  logout(): RepositoryResult<null>;
}
