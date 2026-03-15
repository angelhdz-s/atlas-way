import { CreateExercise } from '@/modules/exercise/application/use-cases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/use-cases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/use-cases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { GetAllUserExercises } from './application/use-cases/get-user-exercises';
import type { IExerciseRepository } from './domain/exercise.repository';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
  exerciseRepository: IExerciseRepository;
  idGeneratorRepository: IdGeneratorRepository;
};

export const makeExerciseModule = ({ exerciseRepository, idGeneratorRepository }: Props) => {
  return {
    CreateExerciseUseCase: new CreateExercise(exerciseRepository, idGeneratorRepository),
    UpdateExerciseUseCase: new UpdateExercise(exerciseRepository),
    GetExerciseByIdUseCase: new GetExerciseById(exerciseRepository),
    GetAllExerciseUseCase: new GetAllExercises(exerciseRepository),
    GetAllUserExercisesUseCase: new GetAllUserExercises(exerciseRepository),
  };
};
