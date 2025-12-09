import { UpdateExercise } from '../domain/exercise.entity';
import { IExerciseRepository } from '../domain/exercise.repository';

export class UpdateExerciseUseCase {
	constructor(private exercise: IExerciseRepository) {}

	async execute(id: string, data: UpdateExercise) {
		return await this.exercise.update(id, data);
	}
}
