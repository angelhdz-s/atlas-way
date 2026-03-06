import type { UseCase } from '@/shared/application/use-case';
import type { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';
import type { LinkExerciseToMuscleInput } from '../dtos/link-exercise-to-muscle.dto';
import { ExerciseToMuscle } from '../../domain/exercise-to-muscle.entity';

export class LinkExerciseToMuscle implements UseCase {
  constructor(private repository: IExerciseToMuscleRepository) {}
  async execute(data: LinkExerciseToMuscleInput) {
    const exerciseToMuscle = ExerciseToMuscle.create(data);
    return this.repository.create(exerciseToMuscle);
  }
}
