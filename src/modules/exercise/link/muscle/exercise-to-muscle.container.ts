import { GetAllExercisesToMuscles } from './application/use-cases/get-all-exercises-to-muscles';
import { GetExerciseToMuscleByExerciseAndMuscleId } from './application/use-cases/get-exercise-to-muscle-by-ids.';
import { GetExercisesToMusclesByExerciseId } from './application/use-cases/get-exercise-to-muscle-by-exercise-id';
import { GetExercisesToMusclesByMuscleId } from './application/use-cases/get-exercise-to-muscle-by-muscle-id';
import { LinkExerciseToMuscle } from './application/use-cases/link-exercise-to-muscle';
import { IExerciseToMuscleRepository } from './domain/exercise-to-muscle.repository';

type Props = {
	exerciseToMuscleRepository: IExerciseToMuscleRepository;
};

export const makeExerciseToMuscleModule = ({ exerciseToMuscleRepository }: Props) => {
	return {
		GetAllExercisesToMusclesUseCase: new GetAllExercisesToMuscles(exerciseToMuscleRepository),
		GetExercisesToMusclesByExerciseIdUseCase: new GetExercisesToMusclesByExerciseId(
			exerciseToMuscleRepository
		),
		GetExercisesToMusclesByMuscleIdUseCase: new GetExercisesToMusclesByMuscleId(
			exerciseToMuscleRepository
		),
		GetExerciseToMuscleByExerciseAndMuscleIdUseCase:
			new GetExerciseToMuscleByExerciseAndMuscleId(exerciseToMuscleRepository),
		LinkExerciseToMuscleUseCase: new LinkExerciseToMuscle(exerciseToMuscleRepository),
	};
};
