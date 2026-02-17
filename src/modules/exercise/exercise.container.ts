import { CreateExercise } from '@/modules/exercise/application/use-cases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/use-cases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/use-cases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { GetAllUserExercises } from './application/use-cases/get-user-exercises';
import { IExerciseRepository } from './domain/exercise.repository';
import { IExerciseToMuscleRepository } from './link/muscle/domain/exercise-to-muscle.repository';
import { IExerciseInitialStatsRepository } from '../exercise-initial-stats/domain/exercise-initial-stats.repository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	exerciseRepository: IExerciseRepository;
	exerciseToMuscleRepository: IExerciseToMuscleRepository;
	exerciseInitialStatsRepository: IExerciseInitialStatsRepository;
	idGeneratorRepository: IdGeneratorRepository;
};

export const makeExerciseModule = ({
	exerciseInitialStatsRepository,
	exerciseRepository,
	exerciseToMuscleRepository,
	idGeneratorRepository,
}: Props) => {
	return {
		CreateExerciseUseCase: new CreateExercise(
			exerciseRepository,
			exerciseToMuscleRepository,
			exerciseInitialStatsRepository,
			idGeneratorRepository
		),
		UpdateExerciseUseCase: new UpdateExercise(exerciseRepository),
		GetExerciseByIdUseCase: new GetExerciseById(exerciseRepository),
		GetAllExerciseUseCase: new GetAllExercises(exerciseRepository),
		GetAllUserExercisesUseCase: new GetAllUserExercises(exerciseRepository),
	};
};
