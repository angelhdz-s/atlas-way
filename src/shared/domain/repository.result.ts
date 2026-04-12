import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { Result } from '@/shared/domain/result';

export type RepositoryResult<T> = Promise<Result<T, DomainError>>;
