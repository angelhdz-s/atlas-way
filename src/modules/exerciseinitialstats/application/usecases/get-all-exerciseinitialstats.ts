import { UseCase } from '@/shared/application/usecase';
import { IExerciseInitialStatsRepository } from '../../domain/exerciseinitialstats.repository';

export class GetAllExerciseInitialStats implements UseCase {
	constructor(private repo: IExerciseInitialStatsRepository) {}
	async execute() {
		return await this.repo.findAll();
	}
}
