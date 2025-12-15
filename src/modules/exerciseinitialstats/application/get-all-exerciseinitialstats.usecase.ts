import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';

export class GetAllExerciseInitialStatsUseCase {
	constructor(private repo: IExerciseInitialStats) {}
	async execute() {
		return await this.repo.findAll();
	}
}
