import { CreateSession } from '@/modules/session/application/use-cases/create-session';
import { GetAllSessions } from '@/modules/session/application/use-cases/get-all-sessions';
import { GetSessionById } from '@/modules/session/application/use-cases/get-session-by-id';
import { UpdateSession } from '@/modules/session/application/use-cases/update-session';
import { GetSessionsByIds } from '@/modules/session/application/use-cases/get-sessions-by-ids';
import { DeleteSession } from '@/modules/session/application/use-cases/delete-session';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';

type Props = {
  sessionRepository: ISessionRepository;
  exerciseRepository: IExerciseRepository;
  idGeneratorRepository: IdGeneratorRepository;
};

export const makeSessionModule = ({
  idGeneratorRepository,
  sessionRepository,
  exerciseRepository,
}: Props) => {
  return {
    CreateSessionUseCase: new CreateSession(
      sessionRepository,
      exerciseRepository,
      idGeneratorRepository
    ),
    GetAllSessionsUseCase: new GetAllSessions(sessionRepository),
    GetSessionByIdUseCase: new GetSessionById(sessionRepository),
    GetSessionsByIdsUseCase: new GetSessionsByIds(sessionRepository),
    UpdateSessionUseCase: new UpdateSession(sessionRepository, exerciseRepository),
    DeleteSessionUseCase: new DeleteSession(sessionRepository),
  };
};
