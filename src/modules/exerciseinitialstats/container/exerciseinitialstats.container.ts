import { CreateExerciseInitialStats } from '../application/usecases/create-exerciseinitialstats';
import { GetAllExerciseInitialStats } from '../application/usecases/get-all-exerciseinitialstats';
import { GetExerciseInitialStatsByExerciseId } from '../application/usecases/get-exerciseinitialstats-by-exercise-id';
import { GetExerciseInitialStatsById } from '../application/usecases/get-exerciseinitialstats-by-id';
import { ExerciseInitialStatsPrismaRepository } from '../infrastructure/exerciseinitialstats.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { UpdateExerciseInitialStats } from '../application/usecases/update-exerciseinitialstats';

export const repoExerciseInitialStats = new ExerciseInitialStatsPrismaRepository();

const GetAllExerciseInitialStatsUseCase = new GetAllExerciseInitialStats(repoExerciseInitialStats);
const GetExerciseInitialStatsByIdUseCase = new GetExerciseInitialStatsById(
	repoExerciseInitialStats
);
const GetExerciseInitialStatsByExerciseIdUseCase = new GetExerciseInitialStatsByExerciseId(
	repoExerciseInitialStats
);

const CreateExerciseInitialStatsUseCase = new CreateExerciseInitialStats(
	repoExerciseInitialStats,
	IdGeneratorContainer
);
const UpdateExerciseInitialStatsUseCase = new UpdateExerciseInitialStats(repoExerciseInitialStats);

export const ExerciseInitialStatsContainer = {
	GetAllExerciseInitialStatsUseCase,
	GetExerciseInitialStatsByIdUseCase,
	GetExerciseInitialStatsByExerciseIdUseCase,
	CreateExerciseInitialStatsUseCase,
	UpdateExerciseInitialStatsUseCase,
};
