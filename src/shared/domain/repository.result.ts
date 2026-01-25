import { DomainError } from './errors/domain.errors';
import { Result } from './result';

export type RepositoryResult<T> = Promise<Result<T, DomainError>>;
