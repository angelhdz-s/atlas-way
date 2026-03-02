import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { AuthSession } from './errors/auth-session.types';

export interface IAuthRepository {
  getSession(): RepositoryResult<AuthSession | null>;
}
