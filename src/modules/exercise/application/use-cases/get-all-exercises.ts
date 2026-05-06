import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/shared.use-case';

export class GetAllExercises implements UseCase {
  constructor(private repository: IExerciseRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
