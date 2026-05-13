import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { Failure } from '@/shared/domain/result';
import { MuscleNotFoundError } from '@/modules/muscle/domain/errors/muscle.errors';
import type { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { UseCase } from '@/shared/application/shared.use-case';

export class CreateExercise implements UseCase {
  constructor(
    private exerciseRepository: IExerciseRepository,
    private muscleRepository: IMuscleRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(exerciseData: CreateExerciseInput) {
    const idResult = await this.generator.generate();
    if (!idResult.success) return idResult;

    const exerciseId = idResult.data;

    const muscles = await this.muscleRepository.findByIds(exerciseData.muscleIds);
    if (!muscles.success) return Failure(new MuscleNotFoundError());

    const { muscleIds, ...createExerciseData } = exerciseData;

    const newExerciseResult = Exercise.create(exerciseId, {
      ...createExerciseData,
      muscles: muscles.data,
    });

    if (!newExerciseResult.success) return newExerciseResult;
    const newExercise = newExerciseResult.data;

    return await this.exerciseRepository.create(newExercise);
  }
}
