import { ExerciseNotFoundError } from '@/modules/exercise/domain/errors/exercise.errors';
import { Failure } from '@/shared/domain/result';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import { MuscleNotFoundError } from '@/modules/muscle/domain/errors/muscle.errors';
import { updateExercise } from '@/modules/exercise/application/helpers/update-exercise.helper';

export class UpdateExercise implements UseCase {
  constructor(
    private exerciseRepository: IExerciseRepository,
    private muscleRepository: IMuscleRepository
  ) {}

  async execute(id: Exercise['id'], data: UpdateExerciseInput) {
    const exerciseResult = await this.exerciseRepository.findById(id);
    if (!exerciseResult.success) return exerciseResult;
    if (!exerciseResult.data) return Failure(new ExerciseNotFoundError());

    const exercise = exerciseResult.data;

    const updateResult = updateExercise(data, exercise);
    if (!updateResult.success) return updateResult;

    if (data.muscleIds) {
      const musclesResult = await this.muscleRepository.findByIds(data.muscleIds);
      if (!musclesResult.success) return musclesResult;
      if (data.muscleIds.length !== musclesResult.data.length)
        return Failure(new MuscleNotFoundError());
      exercise.changeMuscles(musclesResult.data);
    }

    return await this.exerciseRepository.update(exercise);
  }
}
