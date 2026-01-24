import { UseCase } from '@/shared/application/use-case';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import { ExerciseInitialStatsProps } from '../../domain/exercise-initial-stats.types';
import { UpdateExerciseInitialStatsInput } from '../dtos/update-exercise-initial-stats.dto';
import { Failure } from '@/shared/domain/result';
import { ExcerciseInitialStatsNotFoundError } from '../../domain/errors/exercise-initial-stats.errors';

export class UpdateExerciseInitialStats implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute(id: ExerciseInitialStatsProps['id'], data: UpdateExerciseInitialStatsInput) {
		const exerciseInitialStatsResult = await this.repo.findById(id);
		if (!exerciseInitialStatsResult.success || !exerciseInitialStatsResult.data) {
			if (!exerciseInitialStatsResult.success)
				return Failure(exerciseInitialStatsResult.error);
			return Failure(new ExcerciseInitialStatsNotFoundError());
		}

		const domainExerciseIS = exerciseInitialStatsResult.data;

		if (data.sets) domainExerciseIS.changeSets(data.sets);
		if (data.reps) domainExerciseIS.changeReps(data.reps);
		if (data.weight) domainExerciseIS.changeWeight(data.weight);

		return await this.repo.update(domainExerciseIS);
	}
}
