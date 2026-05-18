import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain//errors/domain.errors';

export interface IdGeneratorRepository {
  generate: () => Result<string, DomainError>;
}
