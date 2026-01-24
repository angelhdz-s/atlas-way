import { RepositoryResult } from '@/shared/domain/repository.result';
import { ExerciseInitialStats } from './exercise-initial-stats.entity';

export interface IExerciseInitialStatsRepository {
	create: (data: ExerciseInitialStats) => RepositoryResult<ExerciseInitialStats>;
	update: (data: ExerciseInitialStats) => RepositoryResult<ExerciseInitialStats>;
	findAll: () => RepositoryResult<ExerciseInitialStats[]>;
	findById: (id: ExerciseInitialStats['id']) => RepositoryResult<ExerciseInitialStats | null>;
	findByExerciseId: (
		exerciseId: ExerciseInitialStats['exerciseId']
	) => RepositoryResult<ExerciseInitialStats | null>;
}
