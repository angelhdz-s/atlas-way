import { ExerciseInitialStats } from '@/prisma/client';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import { UseCase } from '@/shared/application/usecase';

export class GetExerciseInitialStatsById implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute(id: ExerciseInitialStats['id']) {
		return await this.repo.findById(id);
	}
}
