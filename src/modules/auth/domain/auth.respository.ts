import { RepositoryResult } from '@/shared/domain/repository.result';
import { AuthSession } from './errors/auth-session.types';

export interface IAuthRepository {
	getSession(): RepositoryResult<AuthSession | null>;
}
