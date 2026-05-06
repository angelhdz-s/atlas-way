import type { RepositoryResult } from '@/shared/domain/repository.result';

export interface IdGeneratorRepository {
  generate: () => RepositoryResult<string>;
}
