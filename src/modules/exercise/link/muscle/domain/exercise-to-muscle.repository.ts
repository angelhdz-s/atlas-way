import { RepositoryResult } from '@/shared/domain/repository.result';
import { ExerciseToMuscleProps } from './exercise-to-muscle.types';
import { ExerciseToMuscle } from './exercise-to-muscle.entity';
export interface IExerciseToMuscleRepository {
	create: (data: ExerciseToMuscle) => RepositoryResult<ExerciseToMuscle>;
	findAll: () => RepositoryResult<ExerciseToMuscle[]>;
	findByExerciseId: (
		exerciseId: ExerciseToMuscleProps['exerciseId']
	) => RepositoryResult<ExerciseToMuscle[]>;
	findByMuscleId: (
		muscleId: ExerciseToMuscleProps['muscleId']
	) => RepositoryResult<ExerciseToMuscle[]>;
	findByExerciseAndMuscleId: (data: {
		exerciseId: ExerciseToMuscle['exerciseId'];
		muscleId: ExerciseToMuscle['muscleId'];
	}) => RepositoryResult<ExerciseToMuscle | null>;
}
