import { Muscle } from './muscle.entity';
import { RepositoryResult } from '@/shared/domain/repository.result';
import { MuscleProps } from './muscle.types';

export interface IMuscleRepository {
	findAll: () => RepositoryResult<Muscle[]>;
	findById: (id: MuscleProps['id']) => RepositoryResult<Muscle | null>;
}
