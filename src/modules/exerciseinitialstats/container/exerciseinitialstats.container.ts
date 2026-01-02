import { CreateExerciseInitialStats } from '../application/usecases/create-exerciseinitialstats';
import { GetAllExerciseInitialStats } from '../application/usecases/get-all-exerciseinitialstats';
import { GetExerciseInitialStatsByExerciseId } from '../application/usecases/get-exerciseinitialstats-by-exercise-id';
import { GetExerciseInitialStatsById } from '../application/usecases/get-exerciseinitialstats-by-id';
import { ExerciseInitialStatsPrismaRepository } from '../infrastructure/prisma/exerciseinitialstats.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { UpdateExerciseInitialStats } from '../application/usecases/update-exerciseinitialstats';

export const exerciseInitialStatsRepo = new ExerciseInitialStatsPrismaRepository();

const GetAllExerciseInitialStatsUseCase = new GetAllExerciseInitialStats(exerciseInitialStatsRepo);
const GetExerciseInitialStatsByIdUseCase = new GetExerciseInitialStatsById(
	exerciseInitialStatsRepo
);
const GetExerciseInitialStatsByExerciseIdUseCase = new GetExerciseInitialStatsByExerciseId(
	exerciseInitialStatsRepo
);

const CreateExerciseInitialStatsUseCase = new CreateExerciseInitialStats(
	exerciseInitialStatsRepo,
	IdGeneratorContainer
);
const UpdateExerciseInitialStatsUseCase = new UpdateExerciseInitialStats(exerciseInitialStatsRepo);

export const ExerciseInitialStatsContainer = {
	GetAllExerciseInitialStatsUseCase,
	GetExerciseInitialStatsByIdUseCase,
	GetExerciseInitialStatsByExerciseIdUseCase,
	CreateExerciseInitialStatsUseCase,
	UpdateExerciseInitialStatsUseCase,
};
