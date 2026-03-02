import type { ISessionRepository } from '../../domain/session.repository';
import type { CreateSessionInput } from '../dtos/create-session.dto';
import { Session } from '../../domain/session.entity';
import type { UseCase } from '@/shared/application/use-case';
import type { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import type { ISessionToExerciseRepository } from '../../link/domain/session-to-exercise.repository';
import { SessionToExercise } from '../../link/domain/session-to-exercise.entity';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { CreateSessionToExerciseInput } from '../../link/application/dtos/create-session-to-exercise.dto';
import { Failure } from '@/shared/domain/result';

export class CreateSession implements UseCase {
  constructor(
    private repository: ISessionRepository,
    private linkRepository: ISessionToExerciseRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(
    data: CreateSessionInput,
    exerciseIds: ExerciseProps['id'][] | null = null
  ) {
    const sessionId = this.generator.generate();
    const newSession = Session.create(sessionId, data);
    const sessionResult =
      await this.repository.create(newSession);
    if (!exerciseIds || !sessionResult.success)
      return sessionResult;

    for (const exerciseId of exerciseIds) {
      const newSessionLinkProps: CreateSessionToExerciseInput =
        {
          sessionId,
          exerciseId,
        };
      const newSessionToExercise = SessionToExercise.create(
        newSessionLinkProps
      );
      const sessionToExerciseResult =
        await this.linkRepository.create(
          newSessionToExercise
        );
      if (!sessionToExerciseResult.success)
        return Failure(sessionToExerciseResult.error);
    }

    return sessionResult;
  }
}
