import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExerciseInitialStats } from '@/modules/exercise-initial-stats/application/usecases/create-exercise-initial-stats';
import { GetAllExerciseInitialStats } from '@/modules/exercise-initial-stats/application/usecases/get-all-exercise-initial-stats';
import { GetExerciseInitialStatsByExerciseId } from '@/modules/exercise-initial-stats/application/usecases/get-exercise-initial-stats-by-exercise-id';
import { GetExerciseInitialStatsById } from '@/modules/exercise-initial-stats/application/usecases/get-exercise-initial-stats-by-id';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exercise-initial-stats/infrastructure/prisma/exerciseinitialstats.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { UpdateExerciseInitialStats } from '@/modules/exercise-initial-stats/application/usecases/update-exercise-initial-stats';
import { globalErrorMapper } from '@/shared/infrastructure/error.mapper.container';

export const makeExerciseInitialStatsModule = () => {
	const exerciseInitialStatsRepo = new ExerciseInitialStatsPrismaRepository(
		prisma,
		globalErrorMapper
	);
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
