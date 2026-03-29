import { ExerciseNotFoundError, ExerciseOwnershipError } from '../../domain/errors/exercise-errors';
import { Failure } from '@/shared/domain/result';
import type { ExerciseProps } from '../../domain/exercise.types';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/use-case';
import type { UserProps } from '@/modules/user/domain/user.types';

export class DeleteExercise implements UseCase {
  constructor(private exerciseRepository: IExerciseRepository) {}

  async execute(exerciseId: ExerciseProps['id'], userId: UserProps['id']) {
    const exerciseResult = await this.exerciseRepository.findById(exerciseId);
    if (!exerciseResult.success) return exerciseResult;
    if (exerciseResult.data === null) return Failure(new ExerciseNotFoundError());
    if (exerciseResult.data.userId !== userId) return Failure(new ExerciseOwnershipError());
    return await this.exerciseRepository.delete(exerciseId);
  }
}
