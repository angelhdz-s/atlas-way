import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateSession } from '@/modules/session/application/use-cases/create-session';
import { GetAllSessions } from '@/modules/session/application/use-cases/get-all-sessions';
import { GetSessionById } from '@/modules/session/application/use-cases/get-session-by-id';
import { UpdateSessions } from '@/modules/session/application/use-cases/update-session';
import { SessionPrismaRepository } from '@/modules/session/infrastructure/prisma/session.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { SessionToExercisePrismaRepository } from './link/infrastructure/prisma/session-to-exercise.prisma.repository';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.translator';

export const makeSessionModule = () => {
	const sessionRepo = new SessionPrismaRepository(prisma, globalErrorMapper);
	const sessionToExerciseRepo = new SessionToExercisePrismaRepository(prisma, globalErrorMapper);
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
