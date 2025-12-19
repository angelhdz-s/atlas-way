import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { UseCase } from '@/shared/application/usecase';
import { Failure, Success } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class GetAllExercises implements UseCase {
	constructor(private repository: IExerciseRepository) {}

	async execute() {
		const result = await this.repository.findAll();
		if (!result.success) return Failure(new ExerciseNotFoundError('Error getting exercises'));
		return Success(result.data);
	}
}
