import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExerciseInitialStats } from '@/modules/exercise-initial-stats/application/use-cases/create-exercise-initial-stats';
import { GetAllExerciseInitialStats } from '@/modules/exercise-initial-stats/application/use-cases/get-all-exercise-initial-stats';
import { GetExerciseInitialStatsByExerciseId } from '@/modules/exercise-initial-stats/application/use-cases/get-exercise-initial-stats-by-exercise-id';
import { GetExerciseInitialStatsById } from '@/modules/exercise-initial-stats/application/use-cases/get-exercise-initial-stats-by-id';
import { UpdateExerciseInitialStats } from '@/modules/exercise-initial-stats/application/use-cases/update-exercise-initial-stats';
import { IExerciseInitialStatsRepository } from './domain/exercise-initial-stats.repository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	exerciseInitialStatsRepository: IExerciseInitialStatsRepository;
	idGeneratorRepository: IdGeneratorRepository;
};

export const makeExerciseInitialStatsModule = ({
	exerciseInitialStatsRepository,
	idGeneratorRepository,
}: Props) => {
	return {
		GetAllExerciseInitialStatsUseCase: new GetAllExerciseInitialStats(
			exerciseInitialStatsRepository
		),
		GetExerciseInitialStatsByIdUseCase: new GetExerciseInitialStatsById(
			exerciseInitialStatsRepository
		),
		GetExerciseInitialStatsByExerciseIdUseCase: new GetExerciseInitialStatsByExerciseId(
			exerciseInitialStatsRepository
		),

		CreateExerciseInitialStatsUseCase: new CreateExerciseInitialStats(
			exerciseInitialStatsRepository,
			idGeneratorRepository
		),
		UpdateExerciseInitialStatsUseCase: new UpdateExerciseInitialStats(
			exerciseInitialStatsRepository
		),
	};
};
