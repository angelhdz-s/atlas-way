import { CreateSession } from '@/modules/session/application/use-cases/create-session';
import { GetAllSessions } from '@/modules/session/application/use-cases/get-all-sessions';
import { GetSessionById } from '@/modules/session/application/use-cases/get-session-by-id';
import { UpdateSessions } from '@/modules/session/application/use-cases/update-session';
import type { ISessionRepository } from './domain/session.repository';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IExerciseRepository } from '../exercise/domain/exercise.repository';
import { GetSessionsByIds } from './application/use-cases/get-sessions-by-ids';
import { DeleteSession } from './application/use-cases/delete-session';

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
    UpdateSessionUseCase: new UpdateSessions(sessionRepository),
    DeleteSessionUseCase: new DeleteSession(sessionRepository),
  };
};
