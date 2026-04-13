import { ExerciseNotFoundError } from '@/modules/exercise/domain/errors/exercise-errors';
import { Failure } from '@/shared/domain/result';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import type { UseCase } from '@/shared/application/use-case';

export class UpdateExercise implements UseCase {
  constructor(
    private exerciseRepository: IExerciseRepository,
    private muscleRepository: IMuscleRepository
  ) {}

  async execute(id: Exercise['id'], data: UpdateExerciseInput) {
    const exerciseResult = await this.exerciseRepository.findById(id);
    if (!exerciseResult.success || !exerciseResult.data)
      return Failure(new ExerciseNotFoundError());

    const exercise = exerciseResult.data;

    if (data.name) exercise.changeName(data.name);
    if (data.description) exercise.changeDescription(data.description);
    if (data.sets) exercise.changeSets(data.sets);
    if (data.reps) exercise.changeReps(data.reps);
    if (data.weight) exercise.changeWeight(data.weight);
    if (data.muscleIds) {
      const musclesResult = await this.muscleRepository.findByIds(data.muscleIds);
      if (!musclesResult.success) return musclesResult;
      exercise.changeMuscles(musclesResult.data);
    }
    return await this.exerciseRepository.update(exercise);
  }
}
