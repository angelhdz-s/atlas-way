import { UseCase } from '@/shared/application/use-case';
import { ExerciseInitialStats } from '../../domain/exercise-initial-stats.entity';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';

export class GetExerciseInitialStatsByExerciseId implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute(exerciseId: ExerciseInitialStats['exerciseId']) {
		return await this.repo.findByExerciseId(exerciseId);
	}
}
