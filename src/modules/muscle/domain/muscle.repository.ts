import type { Muscle } from './muscle.entity';
import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { MuscleProps } from './muscle.types';

export interface IMuscleRepository {
  findAll: () => RepositoryResult<Muscle[]>;
  findById: (
    id: MuscleProps['id']
  ) => RepositoryResult<Muscle | null>;
}
