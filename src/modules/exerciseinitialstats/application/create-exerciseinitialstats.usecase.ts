import { NewExerciseInitialStats } from '../domain/exerciseinitialstats.entity';
import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';

export class CreateExerciseInitialStatsUseCase {
	constructor(private repo: IExerciseInitialStats) {}
	async execute(data: NewExerciseInitialStats) {
		return await this.repo.create(data);
	}
}
