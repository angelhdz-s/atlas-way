import { CreateExercise } from '@/modules/exercise/application/usecases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/usecases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/usecases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/usecases/update-exercise';
import { ExercisePrismaRepository } from '@/modules/exercise/infrastructure/exercise.prisma.repository';
import { IdGeneratorContainer } from '@/shared/container/id-generator.container';

const ExerciseDependencyRepository = new ExercisePrismaRepository();

const CreateExerciseUseCase = new CreateExercise(
	ExerciseDependencyRepository,
	IdGeneratorContainer
);
const UpdateExerciseUseCase = new UpdateExercise(ExerciseDependencyRepository);
const GetExerciseUseCase = new GetExerciseById(ExerciseDependencyRepository);
const GetAllExerciseUseCase = new GetAllExercises(ExerciseDependencyRepository);

export const ExerciseContainer = {
	CreateExerciseUseCase,
	UpdateExerciseUseCase,
	GetExerciseUseCase,
	GetAllExerciseUseCase,
};
