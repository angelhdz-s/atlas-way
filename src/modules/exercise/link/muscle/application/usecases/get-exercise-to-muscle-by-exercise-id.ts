import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class GetExercisesToMusclesByExerciseId implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(id: ExerciseToMuscle['exerciseId']) {
		return this.repository.findByExerciseId(id);
	}
}
