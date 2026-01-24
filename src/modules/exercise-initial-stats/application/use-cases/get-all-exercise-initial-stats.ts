import { UseCase } from '@/shared/application/use-case';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';

export class GetAllExerciseInitialStats implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute() {
		return await this.repo.findAll();
	}
}
