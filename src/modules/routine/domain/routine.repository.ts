import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { Routine } from '@/modules/routine/domain/routine.entity';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';

export interface IRoutineRepository {
  create: (data: Routine) => RepositoryResult<Routine>;
  update: (data: Routine) => RepositoryResult<Routine>;
  findaAll: () => RepositoryResult<Routine[]>;
  findById: (id: RoutineProps['id']) => RepositoryResult<Routine | null>;
  delete: (id: RoutineProps['id']) => RepositoryResult<Routine>;
}
