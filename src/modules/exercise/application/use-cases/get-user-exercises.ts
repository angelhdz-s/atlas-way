import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/use-case';
import { Failure, Success } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class GetAllUserExercises implements UseCase {
  constructor(private repository: IExerciseRepository) {}

  async execute(userId: Exercise['userId']) {
    return await this.repository.findAllByUserId(userId);
  }
}
