import { DomainError } from './errors/domain-error';
import { Result } from './result';

export type RepositoryResult<T> = Promise<Result<T, DomainError>>;
