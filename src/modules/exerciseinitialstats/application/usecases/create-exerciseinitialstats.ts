import { UUIDGenerator } from '@/shared/infrastructure/uuid-generator';
import { ExerciseInitialStats } from '../../domain/exerciseinitialstats.entity';
import { IExerciseInitialStatsRepository } from '../../domain/exerciseinitialstats.repository';
import { CreateExerciseInitialStatsInput } from '../dtos/create-exercise-initial-stats.dto';
import { UseCase } from '@/shared/application/usecase';

export class CreateExerciseInitialStats implements UseCase {
	constructor(
		private repo: IExerciseInitialStatsRepository,
		private generator: UUIDGenerator
	) {}
	async execute(data: CreateExerciseInitialStatsInput) {
		const id = this.generator.generate();
		const domainData = ExerciseInitialStats.create(id, data);
		return await this.repo.create(domainData);
	}
}
