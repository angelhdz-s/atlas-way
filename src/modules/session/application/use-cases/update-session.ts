import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { Failure, Success } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/session/domain/errors/session.errors';
import {
  ExerciseNotFoundError,
  InvalidExerciseData,
} from '@/modules/exercise/domain/errors/exercise.errors';
import { isArray } from '@/shared/domain/validation/validation.non-primitives';
import { isArrayOf } from '@/shared/domain/validation/validation.utils';
import { updateSessionProperties } from '@/modules/session/application/helpers/update-session.use-case.helpers';

export class UpdateSession implements UseCase {
  constructor(
    private sessionRepository: ISessionRepository,
    private exerciseRepository: IExerciseRepository
  ) {}

  async execute(id: SessionProps['id'], data: UpdateSessionInput) {
    const sessionResult = await this.sessionRepository.findById(id);
    if (!sessionResult.success) return sessionResult;
    if (!sessionResult.data) return Failure(new SessionNotFoundError());

    const session = sessionResult.data;

    const updatePropsResult = updateSessionProperties(data, session);
    if (!updatePropsResult.success) return updatePropsResult;

    const exercisesResult = await this.prepareExercises(data.exerciseIds);
    if (!exercisesResult.success) return exercisesResult;
    if (exercisesResult.data) session.changeExercises(exercisesResult.data);

    return await this.sessionRepository.update(session);
  }

  private async prepareExercises(
    exerciseIds?: UpdateSessionInput['exerciseIds']
  ): Promise<Result<Exercise[] | null, DomainError>> {
    if (!exerciseIds) return Success(null);
    if (!isArray(exerciseIds) || !isArrayOf(exerciseIds, 'string'))
      return Failure(new InvalidExerciseData());
    const exercises: Exercise[] = [];
    const exercisesFindById = exerciseIds.map((id) => this.exerciseRepository.findById(id));
    const exercisesResults = await Promise.all(exercisesFindById);
    for (const exerciseResult of exercisesResults) {
      if (!exerciseResult.success) return exerciseResult;
      if (!exerciseResult.data) return Failure(new ExerciseNotFoundError());
      exercises.push(exerciseResult.data);
    }
    return Success(exercises);
  }
}
