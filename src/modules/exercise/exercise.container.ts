import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExercise } from '@/modules/exercise/application/usecases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/usecases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/usecases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/usecases/update-exercise';
import { ExercisePrismaRepository } from '@/modules/exercise/infrastructure/exercise.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exerciseinitialstats/infrastructure/prisma/exerciseinitialstats.prisma.repository';

export const makeExerciseModule = () => {
	const exerciseRepo = new ExercisePrismaRepository(prisma);
	const exerciseInitialStatsRepo = new ExerciseInitialStatsPrismaRepository(prisma);
	return {
		CreateExerciseUseCase: new CreateExercise(
			exerciseRepo,
			exerciseInitialStatsRepo,
			IdGeneratorContainer
		),
		UpdateExerciseUseCase: new UpdateExercise(exerciseRepo),
		GetExerciseUseCase: new GetExerciseById(exerciseRepo),
		GetAllExerciseUseCase: new GetAllExercises(exerciseRepo),
	};
};
