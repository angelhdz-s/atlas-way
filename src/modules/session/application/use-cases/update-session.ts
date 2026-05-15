import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { UpdateSessionInput } from '@/modules/session/application/dtos/update-session.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/session/domain/errors/session.errors';
import { ExerciseNotFoundError } from '@/modules/exercise/domain/errors/exercise.errors';

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

    if (data.name) {
      const nameResult = session.changeName(data.name);
      if (!nameResult.success) return nameResult;
    }

    if (data.description) {
      const descriptionName = session.changeDescription(data.description);
      if (!descriptionName.success) return descriptionName;
    }

    const exercises: Exercise[] = [];
    if (data.exerciseIds) {
      for (const exerciseId of data.exerciseIds) {
        const exerciseResult = await this.exerciseRepository.findById(exerciseId);
        if (!exerciseResult.success) return exerciseResult;
        if (!exerciseResult.data) return Failure(new ExerciseNotFoundError());
        exercises.push(exerciseResult.data);
      }
      session.changeExercises(exercises);
    }

    return await this.sessionRepository.update(session);
  }
}
