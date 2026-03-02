import type { UseCase } from '@/shared/application/use-case';
import type { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import type { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class GetExercisesToMusclesByExerciseId implements UseCase {
  constructor(
    private repository: IExerciseToMuscleRepository
  ) {}
  async execute(
    exerciseId: ExerciseToMuscle['exerciseId']
  ) {
    return this.repository.findByExerciseId(exerciseId);
  }
}
