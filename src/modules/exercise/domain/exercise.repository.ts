import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { RepositoryResult } from '@/shared/domain/repository.result';
export interface IExerciseRepository {
  create: (data: Exercise) => RepositoryResult<Exercise>;
  update: (data: Exercise) => RepositoryResult<Exercise>;
  findAll: () => RepositoryResult<Exercise[]>;
  findById: (id: Exercise['id']) => RepositoryResult<Exercise | null>;
  findByIds: (id: Exercise['id'][]) => RepositoryResult<Exercise[]>;
  findAllByUserId: (userId: Exercise['userId']) => RepositoryResult<Exercise[]>;
}
