import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';

export class GetExerciseToMuscleByExerciseAndMuscleId implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(id: Exercise['id']) {
		return await this.repository.findAll();
	}
}
