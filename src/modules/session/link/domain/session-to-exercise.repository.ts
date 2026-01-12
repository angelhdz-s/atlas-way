import { RepositoryResult } from '@/shared/domain/repository.result';
import { SessionToExercise } from './session-to-exercise.entity';

export interface ISessionToExerciseRepository {
	create: (data: SessionToExercise) => RepositoryResult<SessionToExercise>;
	findAll: () => RepositoryResult<SessionToExercise[]>;
	listBySessionId: (
		sessionId: SessionToExercise['sessionId']
	) => RepositoryResult<SessionToExercise[]>;
	listByExerciseId: (
		exerciseId: SessionToExercise['exerciseId']
	) => RepositoryResult<SessionToExercise[]>;
	findBySessionAndExerciseId: (data: {
		sessionId: SessionToExercise['sessionId'];
		exerciseId: SessionToExercise['exerciseId'];
	}) => RepositoryResult<SessionToExercise | null>;
}
