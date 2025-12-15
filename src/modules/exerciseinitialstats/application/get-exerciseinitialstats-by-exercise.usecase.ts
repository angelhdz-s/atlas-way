import { ExerciseInitialStats } from '../domain/exerciseinitialstats.entity';
import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';

export class GetExerciseInitialStatsByExerciseIdUseCase {
	constructor(private repo: IExerciseInitialStats) {}
	async execute(exerciseId: ExerciseInitialStats['exerciseId']) {
		return await this.repo.findByExerciseId(exerciseId);
	}
}
