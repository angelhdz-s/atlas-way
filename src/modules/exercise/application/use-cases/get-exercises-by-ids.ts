import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/use-case';
import type { ExerciseProps } from '../../domain/exercise.types';

export class GetExercisesByIds implements UseCase {
  constructor(private repository: IExerciseRepository) {}

  async execute(ids: ExerciseProps['id'][]) {
    return await this.repository.findByIds(ids);
  }
}
