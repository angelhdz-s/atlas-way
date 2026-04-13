import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/session/domain/errors/session.errors';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';
import type { UseCase } from '@/shared/application/use-case';

export class UpdateSession implements UseCase {
  constructor(
    private sessionRepository: ISessionRepository,
    private exerciseRepository: IExerciseRepository
  ) {}

  async execute(id: SessionProps['id'], data: UpdateSessionInput) {
    const sessionResult = await this.sessionRepository.findById(id);

    if (!sessionResult.success || !sessionResult.data) {
      if (!sessionResult.success) return Failure(sessionResult.error);
      return Failure(new SessionNotFoundError());
    }

    const session = sessionResult.data;

    if (data.name) session.changeName(data.name);
    if (data.description) session.changeDescription(data.description);
    if (data.exerciseIds) {
      const exercisesResult = await this.exerciseRepository.findByIds(data.exerciseIds);
      if (!exercisesResult.success) return exercisesResult;
      session.changeExercises(exercisesResult.data);
    }

    return await this.sessionRepository.update(session);
  }
}
