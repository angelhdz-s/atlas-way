import { RepositoryResult } from '@/shared/domain/repository.result';
import { RoutineDaysProps } from './routine-days.types';
import { RoutineDays } from './routine-days.entity';

export interface IRoutineDaysRepository {
	create: (data: RoutineDays) => RepositoryResult<RoutineDays>;
	update: (data: RoutineDays) => RepositoryResult<RoutineDays>;
	findAll: () => RepositoryResult<RoutineDays[]>;
	findById: (id: RoutineDaysProps['id']) => RepositoryResult<RoutineDays | null>;
}
