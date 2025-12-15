import { ExerciseInitialStats } from '../domain/exerciseinitialstats.entity';
import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';

export class GetExerciseInitialStatsByIdUseCase {
	constructor(private repo: IExerciseInitialStats) {}
	async execute(id: ExerciseInitialStats['id']) {
		return await this.repo.findById(id);
	}
}
