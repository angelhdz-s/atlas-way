import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { UseCase } from '@/shared/application/usecase';
import { Failure, Success } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class GetExerciseById implements UseCase {
	constructor(private repository: IExerciseRepository) {}

	async execute(id: Exercise['id']) {
		const result = await this.repository.findById(id);
		if (!result.success) return Failure(new ExerciseNotFoundError('Exercise was not found'));
		return Success(result.data);
	}
}
