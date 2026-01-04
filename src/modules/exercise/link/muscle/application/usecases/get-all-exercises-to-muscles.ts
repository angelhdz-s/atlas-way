import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';

export class GetAllExercisesToMuscles implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute() {
		return await this.repository.findAll();
	}
}
