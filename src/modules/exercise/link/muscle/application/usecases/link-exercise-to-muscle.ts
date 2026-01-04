import { UseCase } from '@/shared/application/usecase';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import { LinkExerciseToMuscleInput } from '../dtos/create-exercise-to-muscle.dto';
import { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class LinkExerciseToMuscle implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(data: LinkExerciseToMuscleInput) {
		const exerciseToMuscle = ExerciseToMuscle.create(data);
		return this.repository.create(exerciseToMuscle);
	}
}
