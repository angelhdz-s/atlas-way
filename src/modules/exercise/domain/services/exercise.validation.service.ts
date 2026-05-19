import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { Failure, Success } from '@/shared/domain/result';
import { isArray } from '@/shared/domain/validation/validation.non-primitives';
import { isArrayOf } from '@/shared/domain/validation/validation.utils';
import {
  ExerciseNotFoundError,
  InvalidExerciseData,
} from '@/modules/exercise/domain/errors/exercise.errors';

export class ExerciseValidationService {
  constructor(private readonly exerciseRepository: IExerciseRepository) {}
  async validateAndFetch(exerciseIds?: string[]): Promise<Result<Exercise[] | null, DomainError>> {
    if (!exerciseIds) return Success(null);
    if (!isArray(exerciseIds)) return Failure(new InvalidExerciseData());
    if (exerciseIds.length > 0 && !isArrayOf(exerciseIds, 'string'))
      return Failure(new InvalidExerciseData());

    if (exerciseIds.length === 0) return Success([]);

    const distinctExerciseIds = Array.from(new Set(exerciseIds));
    const exercises: Exercise[] = [];

    const findMuscles = distinctExerciseIds.map((m) => this.exerciseRepository.findById(m));
    const muscleResults = await Promise.all(findMuscles);
    for (const muscleResult of muscleResults) {
      if (!muscleResult.success) return muscleResult;
      if (!muscleResult.data) return Failure(new ExerciseNotFoundError());

      exercises.push(muscleResult.data);
    }

    return Success(exercises);
  }
}
