import { IExerciseRepository } from '../domain/exercise.repository';

export class GetExerciseUseCase {
	constructor(private exercise: IExerciseRepository) {}

	async execute(id: string) {
		return await this.exercise.findById(id);
	}
}
