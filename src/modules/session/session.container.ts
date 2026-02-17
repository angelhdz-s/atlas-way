import { CreateSession } from '@/modules/session/application/use-cases/create-session';
import { GetAllSessions } from '@/modules/session/application/use-cases/get-all-sessions';
import { GetSessionById } from '@/modules/session/application/use-cases/get-session-by-id';
import { UpdateSessions } from '@/modules/session/application/use-cases/update-session';
import { ISessionRepository } from './domain/session.repository';
import { ISessionToExerciseRepository } from './link/domain/session-to-exercise.repository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';
type Props = {
	sessionRepository: ISessionRepository;
	sessionToExerciseRepository: ISessionToExerciseRepository;
	idGeneratorRepository: IdGeneratorRepository;
};

export const makeSessionModule = ({
	idGeneratorRepository,
	sessionRepository,
	sessionToExerciseRepository,
}: Props) => {
	return {
		CreateSessionUseCase: new CreateSession(
			sessionRepository,
			sessionToExerciseRepository,
			idGeneratorRepository
		),
		GetAllSessionsUseCase: new GetAllSessions(sessionRepository),
		GetSessionByIdUseCase: new GetSessionById(sessionRepository),
		UpdateSessionUseCase: new UpdateSessions(sessionRepository),
	};
};
