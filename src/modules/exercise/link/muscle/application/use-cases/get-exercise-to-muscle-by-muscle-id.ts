import type { UseCase } from '@/shared/application/use-case';
import type { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import type { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class GetExercisesToMusclesByMuscleId implements UseCase {
  constructor(private repository: IExerciseToMuscleRepository) {}
  async execute(id: ExerciseToMuscle['muscleId']) {
    return await this.repository.findByMuscleId(id);
  }
}
