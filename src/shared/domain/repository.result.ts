import type { DomainError } from './errors/domain.errors';
import type { Result } from './result';

export type RepositoryResult<T> = Promise<Result<T, DomainError>>;
