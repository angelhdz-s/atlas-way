import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateSession } from '@/modules/session/application/usecases/create-session';
import { GetAllSessions } from '@/modules/session/application/usecases/get-all-sessions';
import { GetSessionById } from '@/modules/session/application/usecases/get-session-by-id';
import { UpdateSessions } from '@/modules/session/application/usecases/update-session';
import { SessionPrismaRepository } from '@/modules/session/infrastructure/prisma/session.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { SessionToExercisePrismaRepository } from './link/infrastructure/prisma/session-to-exercise.prisma.repository';

export const makeSessionModule = () => {
	const sessionRepo = new SessionPrismaRepository(prisma);
	const sessionToExerciseRepo = new SessionToExercisePrismaRepository(prisma);
	return {
		GetAllSessionsUseCase: new GetAllSessions(sessionRepo),
		GetSessionByIdUseCase: new GetSessionById(sessionRepo),
		CreateSessionUseCase: new CreateSession(
			sessionRepo,
			sessionToExerciseRepo,
			IdGeneratorContainer
		),
		UpdateSessionUseCase: new UpdateSessions(sessionRepo),
	};
};
