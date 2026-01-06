import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class GetExercisesToMusclesByExerciseId implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(exerciseId: ExerciseToMuscle['exerciseId']) {
		return this.repository.findByExerciseId(exerciseId);
	}
}
