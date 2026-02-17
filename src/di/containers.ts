import { makeAuthModule } from '@/modules/auth/auth.container';
import { makeBodySectionModule } from '@/modules/body-section/body-section.container';
import { makeExerciseModule } from '@/modules/exercise/exercise.container';
import { makeExerciseToMuscleModule } from '@/modules/exercise/link/muscle/exercise-to-muscle.container';
import { makeMuscleModule } from '@/modules/muscle/muscle.container';
import { makeMuscularGroupModule } from '@/modules/muscular-group/muscular-group.container';
import { makeNotificationModule } from '@/modules/notification/notification.container';
import { makeRoutineModule } from '@/modules/routine/routine.container';
import { makeRoutineDaysModule } from '@/modules/routine-days/routine-days.container';
import { makeSessionModule } from '@/modules/session/session.container';
import { makeUserModule } from '@/modules/user/user.container';
import {
	errorHandlersContainer,
	InfrastructureErrorTranslator,
} from '@/shared/infrastructure/errors/error.translator';
import { AuthNextAuthRepository } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.repository';
import { BodySectionPrismaRepository } from '@/modules/body-section/infrastructure/prisma/body-section.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { ExercisePrismaRepository } from '@/modules/exercise/infrastructure/prisma/exercise.prisma.repository';
import { ExerciseToMusclePrismaRepository } from '@/modules/exercise/link/muscle/infrastructure/prisma/exercise-to-muscle.prisma.repository';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exercise-initial-stats/infrastructure/prisma/exercise-initial-stats.prisma.repository';
import { UUIDGenerator } from '@/shared/infrastructure/generators/uuid-generator';
import { makeExerciseInitialStatsModule } from '@/modules/exercise-initial-stats/exercise-initial-stats.container';
import { MusclePrismaRepository } from '@/modules/muscle/infrastructure/prisma/muscle.prisma.repository';
import { MuscularGroupPrismaReporitory } from '@/modules/muscular-group/infrastructure/prisma/muscular-group.prisma.repository';
import { NotificationPrismaRepository } from '@/modules/notification/infrastructure/prisma/notification.prisma.repository';
import { RoutinePrismaRepository } from '@/modules/routine/infrastructure/prisma/routine.prisma.repository';
import { RoutineDaysPrismaRepository } from '@/modules/routine-days/infrastructure/prisma/routine-days.prisma.repository';
import { SessionPrismaRepository } from '@/modules/session/infrastructure/prisma/session.prisma.repository';
import { SessionToExercisePrismaRepository } from '@/modules/session/link/infrastructure/prisma/session-to-exercise.prisma.repository';
import { UserPrismaRepository } from '@/modules/user/infrastructure/prisma/user.prisma.repository';

/**
 *
 * @returns an object of modules with their own use cases with dependencies injected
 */
export const getContainer = () => {
	// System repositories
	const errorMapper = new InfrastructureErrorTranslator(errorHandlersContainer);
	const authRepository = new AuthNextAuthRepository(errorMapper);
	const idGeneratorRepository = new UUIDGenerator();

	// Database respositories
	const bodySectionRepository = new BodySectionPrismaRepository(prisma, errorMapper);
	const exerciseRepository = new ExercisePrismaRepository(prisma, errorMapper);
	const exerciseInitialStatsRepository = new ExerciseInitialStatsPrismaRepository(
		prisma,
		errorMapper
	);
	const exerciseToMuscleRepository = new ExerciseToMusclePrismaRepository(prisma, errorMapper);
	const muscleRepository = new MusclePrismaRepository(prisma, errorMapper);
	const muscularGroupRepository = new MuscularGroupPrismaReporitory(prisma, errorMapper);
	const notificationRepository = new NotificationPrismaRepository(prisma, errorMapper);
	const routineRepository = new RoutinePrismaRepository(prisma, errorMapper);
	const routineDaysRepository = new RoutineDaysPrismaRepository(prisma, errorMapper);
	const sessionRepository = new SessionPrismaRepository(prisma, errorMapper);
	const sessionToExerciseRepository = new SessionToExercisePrismaRepository(prisma, errorMapper);
	const userRepository = new UserPrismaRepository(prisma, errorMapper);

	return {
		auth: makeAuthModule({ authRepository }),
		bodySection: makeBodySectionModule({ bodySectionRepository }),
		exercise: makeExerciseModule({
			exerciseRepository,
			exerciseToMuscleRepository,
			exerciseInitialStatsRepository,
			idGeneratorRepository,
		}),
		exerciseInitialStats: makeExerciseInitialStatsModule({
			exerciseInitialStatsRepository,
			idGeneratorRepository,
		}),
		exerciseToMuscle: makeExerciseToMuscleModule({ exerciseToMuscleRepository }),
		muscle: makeMuscleModule({ muscleRepository }),
		muscularGroup: makeMuscularGroupModule({ muscularGroupRepository }),
		notification: makeNotificationModule({ notificationRepository, idGeneratorRepository }),
		routine: makeRoutineModule({ routineRepository, idGeneratorRepository }),
		routineDays: makeRoutineDaysModule({ idGeneratorRepository, routineDaysRepository }),
		session: makeSessionModule({
			idGeneratorRepository,
			sessionRepository,
			sessionToExerciseRepository,
		}),
		user: makeUserModule({ authRepository, idGeneratorRepository, userRepository }),
	};
};
