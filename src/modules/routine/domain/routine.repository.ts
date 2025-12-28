import { RepositoryResult } from '@/shared/domain/repository.result';
import { Routine } from './routine.entity';
import { RoutineProps } from './routine.types';

export interface IRoutineRepository {
	create: (data: Routine) => RepositoryResult<Routine>;
	update: (data: Routine) => RepositoryResult<Routine>;
	findaAll: () => RepositoryResult<Routine[]>;
	findById: (id: RoutineProps['id']) => RepositoryResult<Routine | null>;
}
