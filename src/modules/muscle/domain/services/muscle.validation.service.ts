import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';
import type { Muscle } from '@/modules/muscle/domain/muscle.entity';
import { Failure, Success } from '@/shared/domain/result';
import { isArray } from '@/shared/domain/validation/validation.non-primitives';
import { isArrayOf } from '@/shared/domain/validation/validation.utils';
import {
  InvalidMuscleData,
  MuscleNotFoundError,
} from '@/modules/muscle/domain/errors/muscle.errors';

export class MuscleValidationService {
  constructor(private readonly exerciseRepository: IMuscleRepository) {}
  async validateAndFetch(muscleIds?: number[]): Promise<Result<Muscle[] | null, DomainError>> {
    if (!muscleIds) return Success(null);
    if (!isArray(muscleIds)) return Failure(new InvalidMuscleData());
    if (muscleIds.length > 0 && !isArrayOf(muscleIds, 'integer'))
      return Failure(new InvalidMuscleData());

    if (muscleIds.length === 0) return Success([]);

    const distinctMuscleIds = Array.from(new Set(muscleIds));
    const muscles: Muscle[] = [];

    const findMuscles = distinctMuscleIds.map((m) => this.exerciseRepository.findById(m));
    const muscleResults = await Promise.all(findMuscles);
    for (const muscleResult of muscleResults) {
      if (!muscleResult.success) return muscleResult;
      if (!muscleResult.data) return Failure(new MuscleNotFoundError());

      muscles.push(muscleResult.data);
    }

    return Success(muscles);
  }
}
