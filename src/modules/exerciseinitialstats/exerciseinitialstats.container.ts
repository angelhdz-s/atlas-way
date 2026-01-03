import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExerciseInitialStats } from '@/modules/exerciseinitialstats/application/usecases/create-exerciseinitialstats';
import { GetAllExerciseInitialStats } from '@/modules/exerciseinitialstats/application/usecases/get-all-exerciseinitialstats';
import { GetExerciseInitialStatsByExerciseId } from '@/modules/exerciseinitialstats/application/usecases/get-exerciseinitialstats-by-exercise-id';
import { GetExerciseInitialStatsById } from '@/modules/exerciseinitialstats/application/usecases/get-exerciseinitialstats-by-id';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exerciseinitialstats/infrastructure/prisma/exerciseinitialstats.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { UpdateExerciseInitialStats } from '@/modules/exerciseinitialstats/application/usecases/update-exerciseinitialstats';

export const makeExerciseInitialStatsModule = () => {
	const exerciseInitialStatsRepo = new ExerciseInitialStatsPrismaRepository(prisma);
	return {
		GetAllExerciseInitialStatsUseCase: new GetAllExerciseInitialStats(exerciseInitialStatsRepo),
		GetExerciseInitialStatsByIdUseCase: new GetExerciseInitialStatsById(
			exerciseInitialStatsRepo
		),
		GetExerciseInitialStatsByExerciseIdUseCase: new GetExerciseInitialStatsByExerciseId(
			exerciseInitialStatsRepo
		),

		CreateExerciseInitialStatsUseCase: new CreateExerciseInitialStats(
			exerciseInitialStatsRepo,
			IdGeneratorContainer
		),
		UpdateExerciseInitialStatsUseCase: new UpdateExerciseInitialStats(exerciseInitialStatsRepo),
	};
};
