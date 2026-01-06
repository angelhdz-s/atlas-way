import { prisma } from '@/shared/infrastructure/prisma/client';
import { CreateExercise } from '@/modules/exercise/application/usecases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/usecases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/usecases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/usecases/update-exercise';
import { ExercisePrismaRepository } from '@/modules/exercise/infrastructure/prisma/exercise.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { ExerciseInitialStatsPrismaRepository } from '@/modules/exerciseinitialstats/infrastructure/prisma/exerciseinitialstats.prisma.repository';
import { ExerciseToMusclePrismaRepository } from './link/muscle/infrastructure/prisma/exercise-to-muscle.prisma.repository';
import { GetAllUserExercises } from './application/usecases/get-user-exercises';

export const makeExerciseModule = () => {
	const exerciseRepo = new ExercisePrismaRepository(prisma);
	const linkRepo = new ExerciseToMusclePrismaRepository(prisma);
	const statsRepo = new ExerciseInitialStatsPrismaRepository(prisma);
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
