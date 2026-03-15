import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';

export class CreateExercise implements UseCase {
  constructor(
    private repository: IExerciseRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(exerciseData: CreateExerciseInput) {
    const exerciseId = this.generator.generate();
    const newExercise = Exercise.create(exerciseId, exerciseData);
    return await this.repository.create(newExercise);
  }
}
