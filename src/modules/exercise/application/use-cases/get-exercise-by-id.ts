import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/use-case';

export class GetExerciseById implements UseCase {
  constructor(private repository: IExerciseRepository) {}

  async execute(id: Exercise['id']) {
    return await this.repository.findById(id);
  }
}
