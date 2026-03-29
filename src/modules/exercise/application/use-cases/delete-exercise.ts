import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UseCase } from '@/shared/application/use-case';
import type { ExerciseProps } from '../../domain/exercise.types';
import { Failure } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class DeleteExercise implements UseCase {
  constructor(private exerciseRepository: IExerciseRepository) {}

  async execute(exerciseId: ExerciseProps['id']) {
    const exerciseResult = await this.exerciseRepository.findById(exerciseId);
    if (!exerciseResult.success) return exerciseResult;

    if (exerciseResult.data !== null) return Failure(new ExerciseNotFoundError());

    return await this.exerciseRepository.delete(exerciseId);
  }
}
