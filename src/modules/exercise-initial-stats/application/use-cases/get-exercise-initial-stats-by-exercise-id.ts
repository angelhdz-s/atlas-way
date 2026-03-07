import type { UseCase } from '@/shared/application/use-case';
import type { ExerciseInitialStats } from '../../domain/exercise-initial-stats.entity';
import type { IExerciseInitialStatsRepository } from '../../domain/exercise-initial-stats.repository';

export class GetExerciseInitialStatsByExerciseId implements UseCase {
  constructor(private repo: IExerciseInitialStatsRepository) {}
  async execute(exerciseId: ExerciseInitialStats['exerciseId']) {
    return await this.repo.findByExerciseId(exerciseId);
  }
}
