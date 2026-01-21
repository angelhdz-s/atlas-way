import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import { UseCase } from '@/shared/application/usecase';
import { Failure } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class UpdateExercise implements UseCase {
	constructor(private repository: IExerciseRepository) {}

	async execute(id: Exercise['id'], data: UpdateExerciseInput) {
		const result = await this.repository.findById(id);
		if (!result.success || !result.data) return Failure(new ExerciseNotFoundError());

		const exercise = result.data;

		if (data.name) exercise.changeName(data.name);
		if (data.description) exercise.changeDescription(data.description);

		return await this.repository.update(exercise);
	}
}
