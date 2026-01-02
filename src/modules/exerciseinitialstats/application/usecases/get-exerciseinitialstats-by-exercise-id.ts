import { UseCase } from '@/shared/application/usecase';
import { ExerciseInitialStats } from '../../domain/exerciseinitialstats.entity';
import { IExerciseInitialStatsRepository } from '../../domain/exerciseinitialstats.repository';

export class GetExerciseInitialStatsByExerciseId implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute(exerciseId: ExerciseInitialStats['exerciseId']) {
		return await this.repo.findByExerciseId(exerciseId);
	}
}
