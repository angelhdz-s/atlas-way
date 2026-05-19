import type { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { UseCase } from '@/shared/application/shared.use-case';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { MuscleValidationService } from '@/modules/muscle/domain/services/muscle.validation.service';

export class CreateExercise implements UseCase {
  constructor(
    private exerciseRepository: IExerciseRepository,
    private muscleRepository: IMuscleRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(exerciseData: CreateExerciseInput) {
    const idResult = this.generator.generate();
    if (!idResult.success) return idResult;

    const exerciseId = idResult.data;

    const muscleValidationService = new MuscleValidationService(this.muscleRepository);
    const musclesResult = await muscleValidationService.validateAndFetch(exerciseData.muscleIds);
    if (!musclesResult.success) return musclesResult;
    const muscles = musclesResult.data ?? [];

    const newExerciseResult = Exercise.create(exerciseId, {
      ...exerciseData,
      muscles,
    });

    if (!newExerciseResult.success) return newExerciseResult;
    const newExercise = newExerciseResult.data;

    return await this.exerciseRepository.create(newExercise);
  }
}
