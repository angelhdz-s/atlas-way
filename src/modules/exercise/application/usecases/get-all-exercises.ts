import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { UseCase } from '@/shared/application/usecase';
import { Failure, Success } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class GetAllExercises implements UseCase {
	constructor(private repository: IExerciseRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
