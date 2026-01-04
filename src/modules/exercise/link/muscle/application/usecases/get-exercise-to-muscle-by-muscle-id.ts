import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class GetExercisesToMusclesByMuscleId implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(id: ExerciseToMuscle['muscleId']) {
		return await this.repository.findByMuscleId(id);
	}
}
