import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateSession } from '../application/usecases/create-session';
import { GetAllSessions } from '../application/usecases/get-all-sessions';
import { GetSessionById } from '../application/usecases/get-session-by-id';
import { UpdateSessions } from '../application/usecases/update-session';
import { SessionPrismaRepository } from '../infrastructure/prisma/session.prisma.repository';

export const sessionRepo = new SessionPrismaRepository();

const GetAllSessionsUseCase = new GetAllSessions(sessionRepo);
const GetSessionByIdUseCase = new GetSessionById(sessionRepo);
const CreateSessionUseCase = new CreateSession(sessionRepo, IdGeneratorContainer);
const UpdateSessionUseCase = new UpdateSessions(sessionRepo);

export const SessionContainer = {
	GetAllSessionsUseCase,
	GetSessionByIdUseCase,
	CreateSessionUseCase,
	UpdateSessionUseCase,
};
