import type { UseCase } from '@/shared/application/use-case';
import type { IExerciseToMuscleRepository } from '../../domain/exercise-to-muscle.repository';

export class GetAllExercisesToMuscles implements UseCase {
  constructor(private repository: IExerciseToMuscleRepository) {}
  async execute() {
    return await this.repository.findAll();
  }
}
