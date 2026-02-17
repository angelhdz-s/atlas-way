import { ExerciseInitialStats } from '../../domain/exercise-initial-stats.entity';
import { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import { CreateExerciseInitialStatsInput } from '../dtos/create-exercise-initial-stats.dto';
import { UseCase } from '@/shared/application/use-case';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateExerciseInitialStats implements UseCase {
	constructor(
		private repo: IExerciseInitialStatsRepository,
		private generator: IdGeneratorRepository
	) {}
	async execute(data: CreateExerciseInitialStatsInput) {
		const id = this.generator.generate();
		const domainData = ExerciseInitialStats.create(id, data);
		return await this.repo.create(domainData);
	}
}
