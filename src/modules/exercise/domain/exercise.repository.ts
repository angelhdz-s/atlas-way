import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { RepositoryResult } from '@/shared/domain/repository.result';
export interface IExerciseRepository {
	create: (data: Exercise) => RepositoryResult<Exercise>;
	update: (data: Exercise) => RepositoryResult<Exercise>;
	findAll: () => RepositoryResult<Exercise[]>;
	findById: (id: Exercise['id']) => RepositoryResult<Exercise | null>;
}
