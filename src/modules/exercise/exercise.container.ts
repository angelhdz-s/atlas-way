import { CreateExercise } from '@/modules/exercise/application/use-cases/create-exercise';
import { GetAllExercises } from '@/modules/exercise/application/use-cases/get-all-exercises';
import { GetExerciseById } from '@/modules/exercise/application/use-cases/get-exercise-by-id';
import { UpdateExercise } from '@/modules/exercise/application/use-cases/update-exercise';
import { GetAllUserExercises } from '@/modules/exercise/application/use-cases/get-user-exercises';
import { GetExercisesByIds } from '@/modules/exercise/application/use-cases/get-exercises-by-ids';
import { DeleteExercise } from '@/modules/exercise/application/use-cases/delete-exercise';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';

type Props = {
  exerciseRepository: IExerciseRepository;
  muscleRepository: IMuscleRepository;
  idGeneratorRepository: IdGeneratorRepository;
};

export const makeExerciseModule = ({
  exerciseRepository,
  muscleRepository,
  idGeneratorRepository,
}: Props) => {
  return {
    CreateExerciseUseCase: new CreateExercise(
      exerciseRepository,
      muscleRepository,
      idGeneratorRepository
    ),
    UpdateExerciseUseCase: new UpdateExercise(exerciseRepository, muscleRepository),
    GetExerciseByIdUseCase: new GetExerciseById(exerciseRepository),
    GetExerciseByIdsUseCase: new GetExercisesByIds(exerciseRepository),
    GetAllExerciseUseCase: new GetAllExercises(exerciseRepository),
    GetAllUserExercisesUseCase: new GetAllUserExercises(exerciseRepository),
    DeleteExerciseUseCase: new DeleteExercise(exerciseRepository),
  };
};
