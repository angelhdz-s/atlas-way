import { NewExercise } from '../domain/exercise.entity';
import { IExerciseRepository } from '../domain/exercise.repository';

export class CreateExerciseUseCase {
	constructor(private exercise: IExerciseRepository) {}

	async execute(data: NewExercise) {
		return await this.exercise.create(data);
	}
}
