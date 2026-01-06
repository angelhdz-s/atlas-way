import { prisma } from '@/shared/infrastructure/prisma/client';
import { ExerciseToMusclePrismaRepository } from './infrastructure/prisma/exercise-to-muscle.prisma.repository';
import { GetAllExercisesToMuscles } from './application/usecases/get-all-exercises-to-muscles';
import { GetExerciseToMuscleByExerciseAndMuscleId } from './application/usecases/get-exercise-to-muscle-by-ids.';
import { GetExercisesToMusclesByExerciseId } from './application/usecases/get-exercise-to-muscle-by-exercise-id';
import { GetExercisesToMusclesByMuscleId } from './application/usecases/get-exercise-to-muscle-by-muscle-id';
import { LinkExerciseToMuscle } from './application/usecases/link-exercise-to-muscle';

export const makeExerciseToMuscleModuel = () => {
	const repo = new ExerciseToMusclePrismaRepository(prisma);

	return {
		GetAllExercisesToMusclesUseCase: new GetAllExercisesToMuscles(repo),
		GetExercisesToMusclesByExerciseIdUseCase: new GetExercisesToMusclesByExerciseId(repo),
		GetExercisesToMusclesByMuscleIdUseCase: new GetExercisesToMusclesByMuscleId(repo),
		GetExerciseToMuscleByExerciseAndMuscleIdUseCase:
			new GetExerciseToMuscleByExerciseAndMuscleId(repo),
		LinkExerciseToMuscleUseCase: new LinkExerciseToMuscle(repo),
	};
};
