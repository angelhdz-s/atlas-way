import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { MuscularGroup } from './muscular-group.entity';
import type { MuscularGroupProps } from './muscular-group.types';

export interface IMuscularGroupRepository {
  findAll: () => RepositoryResult<MuscularGroup[]>;
  findById: (id: MuscularGroupProps['id']) => RepositoryResult<MuscularGroup | null>;
}
