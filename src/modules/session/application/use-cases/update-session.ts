import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/session/domain/errors/session.errors';
import { updateSessionProperties } from '@/modules/session/application/helpers/update-session.use-case.helpers';
import { ExerciseValidationService } from '@/modules/exercise/domain/services/exercise.validation.service';

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

    const exerciseValidationService = new ExerciseValidationService(this.exerciseRepository);
    const exerciseValidatioResult = await exerciseValidationService.validateAndFetch(
      data.exerciseIds
    );
    if (!exerciseValidatioResult.success) return exerciseValidatioResult;
    if (exerciseValidatioResult.data) session.changeExercises(exerciseValidatioResult.data);

    return await this.sessionRepository.update(session);
  }
}
