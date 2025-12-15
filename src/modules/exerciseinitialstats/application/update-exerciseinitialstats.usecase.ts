import { ExerciseInitialStats } from '@/prisma/client';
import { UpdateExerciseInitialStats } from '../domain/exerciseinitialstats.entity';
import { IExerciseInitialStats } from '../domain/exerciseinitialstats.repository';

export class CreateExerciseInitialStatsUseCase {
	constructor(private repo: IExerciseInitialStats) {}
	async execute(id: ExerciseInitialStats['id'], data: UpdateExerciseInitialStats) {
		return await this.repo.update(id, data);
	}
}
