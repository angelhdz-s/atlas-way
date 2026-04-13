import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { MuscleProps } from '@/modules/muscle/domain/muscle.types';

export interface IMuscleRepository {
  findAll: () => RepositoryResult<Muscle[]>;
  findById: (id: MuscleProps['id']) => RepositoryResult<Muscle | null>;
  findByIds: (ids: MuscleProps['id'][]) => RepositoryResult<Muscle[]>;
}
