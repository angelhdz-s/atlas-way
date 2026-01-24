import { UseCase } from '@/shared/application/use-case';
import { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import { ExerciseToMuscleProps } from '../../domain/exercise-to-muscle.types';

export class GetExerciseToMuscleByExerciseAndMuscleId implements UseCase {
	constructor(private repository: IExerciseToMuscleRepository) {}
	async execute(data: {
		exerciseId: ExerciseToMuscleProps['exerciseId'];
		muscleId: ExerciseToMuscleProps['muscleId'];
	}) {
		return await this.repository.findByExerciseAndMuscleId(data);
	}
}
