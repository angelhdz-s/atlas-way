import { ExerciseInitialStats } from '../../domain/exercise-initial-stats.entity';
import type { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';
import type { CreateExerciseInitialStatsInput } from '../dtos/create-exercise-initial-stats.dto';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateExerciseInitialStats implements UseCase {
  constructor(
    private repo: IExerciseInitialStatsRepository,
    private generator: IdGeneratorRepository
  ) {}
  async execute(data: CreateExerciseInitialStatsInput) {
    const id = this.generator.generate();
    const domainData = ExerciseInitialStats.create(
      id,
      data
    );
    return await this.repo.create(domainData);
  }
}
