import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { UpdateExerciseInput } from '@/modules/exercise/application/dtos/update-exercise.dto';
import type { UseCase } from '@/shared/application/use-case';
import { Failure } from '@/shared/domain/result';
import { ExerciseNotFoundError } from '../../domain/errors/exercise-errors';

export class UpdateExercise implements UseCase {
  constructor(private repository: IExerciseRepository) {}

  async execute(id: Exercise['id'], data: UpdateExerciseInput) {
    const exerciseResult = await this.repository.findById(id);
    if (!exerciseResult.success || !exerciseResult.data)
      return Failure(new ExerciseNotFoundError());

    const exercise = exerciseResult.data;

    if (data.name) exercise.changeName(data.name);
    if (data.description) exercise.changeDescription(data.description);
    if (data.sets) exercise.changeSets(data.sets);
    if (data.reps) exercise.changeReps(data.reps);
    if (data.weight) exercise.changeWeight(data.weight);

    return await this.repository.update(exercise);
  }
}
