import { UseCase } from '@/shared/application/usecase';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import { ExerciseInitialStatsProps } from '../../domain/exercise-initial-stats.types';
import { UpdateExerciseInitialStatsInput } from '../dtos/update-exercise-initial-stats.dto';
import { Failure } from '@/shared/domain/result';
import { ExcerciseInitialStatsNotFoundError } from '../../domain/errors/exercise-initial-stats.errors';

export class UpdateExerciseInitialStats implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute(id: ExerciseInitialStatsProps['id'], data: UpdateExerciseInitialStatsInput) {
		const existingData = await this.repo.findById(id);
		if (!existingData.success || !existingData.data) {
			if (!existingData.success) return Failure(existingData.error);
			return Failure(new ExcerciseInitialStatsNotFoundError());
		}

		const domainExerciseIS = existingData.data;

		if (data.sets) domainExerciseIS.changeSets(data.sets);
		if (data.reps) domainExerciseIS.changeReps(data.reps);
		if (data.weight) domainExerciseIS.changeWeight(data.weight);

		return await this.repo.update(domainExerciseIS);
	}
}
