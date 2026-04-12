import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { Result } from '@/shared/domain/result';

export interface UseCase {
  execute: (...args: any) => Promise<Result<any, DomainError>>;
}
