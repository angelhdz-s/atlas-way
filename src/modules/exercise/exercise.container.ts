import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExercise } from '@/modules/exercise/application/use-cases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/use-cases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/use-cases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { ExercisePrismaRepository } from '@/modules/exercise/infrastructure/prisma/exercise.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exercise-initial-stats/infrastructure/prisma/exercise-initial-stats.prisma.repository';
import { ExerciseToMusclePrismaRepository } from './link/muscle/infrastructure/prisma/exercise-to-muscle.prisma.repository';
import { GetAllUserExercises } from './application/use-cases/get-user-exercises';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.mapper';

export const makeExerciseModule = () => {
	const exerciseRepo = new ExercisePrismaRepository(prisma, globalErrorMapper);
	const linkRepo = new ExerciseToMusclePrismaRepository(prisma, globalErrorMapper);
	const statsRepo = new ExerciseInitialStatsPrismaRepository(prisma, globalErrorMapper);
	return {
		CreateExerciseUseCase: new CreateExercise(
			exerciseRepo,
			linkRepo,
			statsRepo,
			IdGeneratorContainer
		),
		UpdateExerciseUseCase: new UpdateExercise(exerciseRepo),
		GetExerciseByIdUseCase: new GetExerciseById(exerciseRepo),
		GetAllExerciseUseCase: new GetAllExercises(exerciseRepo),
		GetAllUserExercisesUseCase: new GetAllUserExercises(exerciseRepo),
	};
};
