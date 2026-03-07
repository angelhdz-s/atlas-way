import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { RoutineDaysProps } from './routine-days.types';
import type { RoutineDays } from './routine-days.entity';

export interface IRoutineDaysRepository {
  create: (data: RoutineDays) => RepositoryResult<RoutineDays>;
  update: (data: RoutineDays) => RepositoryResult<RoutineDays>;
  findAll: () => RepositoryResult<RoutineDays[]>;
  findById: (id: RoutineDaysProps['id']) => RepositoryResult<RoutineDays | null>;
}
