import { prisma } from '@/shared/infrastructure/prisma/client';
import { ExerciseToMusclePrismaRepository } from './infrastructure/prisma/exercise-to-muscle.prisma.repository';
import { GetAllExercisesToMuscles } from './application/use-cases/get-all-exercises-to-muscles';
import { GetExerciseToMuscleByExerciseAndMuscleId } from './application/use-cases/get-exercise-to-muscle-by-ids.';
import { GetExercisesToMusclesByExerciseId } from './application/use-cases/get-exercise-to-muscle-by-exercise-id';
import { GetExercisesToMusclesByMuscleId } from './application/use-cases/get-exercise-to-muscle-by-muscle-id';
import { LinkExerciseToMuscle } from './application/use-cases/link-exercise-to-muscle';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.translator';

export const makeExerciseToMuscleModuel = () => {
	const repo = new ExerciseToMusclePrismaRepository(prisma, globalErrorMapper);

	return {
		GetAllExercisesToMusclesUseCase: new GetAllExercisesToMuscles(repo),
		GetExercisesToMusclesByExerciseIdUseCase: new GetExercisesToMusclesByExerciseId(repo),
		GetExercisesToMusclesByMuscleIdUseCase: new GetExercisesToMusclesByMuscleId(repo),
		GetExerciseToMuscleByExerciseAndMuscleIdUseCase:
			new GetExerciseToMuscleByExerciseAndMuscleId(repo),
		LinkExerciseToMuscleUseCase: new LinkExerciseToMuscle(repo),
	};
};
