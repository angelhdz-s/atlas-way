import { IExerciseRepository } from '../domain/exercise.repository';

export class GetAllExerciseUseCase {
	constructor(private exercise: IExerciseRepository) {}

	async execute() {
		return await this.exercise.findAll();
	}
}
