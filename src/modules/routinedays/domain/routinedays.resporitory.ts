import { RepositoryResult } from '@/shared/domain/repository.result';
import { RoutineDaysProps } from './routinedays.types';
import { RoutineDays } from './routinedays.entity';

export interface IRoutineDaysRepository {
	create: (data: RoutineDays) => RepositoryResult<RoutineDays>;
	update: (data: RoutineDays) => RepositoryResult<RoutineDays>;
	findAll: () => RepositoryResult<RoutineDays[]>;
	findById: (id: RoutineDaysProps['id']) => RepositoryResult<RoutineDays | null>;
}
