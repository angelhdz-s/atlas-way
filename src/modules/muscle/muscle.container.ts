import { GetAllMuscles } from '@/modules/muscle/application/use-cases/find-all-muscles';
import { GetMuscleById } from '@/modules/muscle/application/use-cases/find-muscle-by-id';
import { GetMusclesByIds } from '@/modules/muscle/application/use-cases/find-muscles-by-ids';
import type { IMuscleRepository } from '@/modules/muscle/domain/muscle.repository';

type Props = {
  muscleRepository: IMuscleRepository;
};

export const makeMuscleModule = ({ muscleRepository }: Props) => {
  return {
    GetAllMusclesUseCase: new GetAllMuscles(muscleRepository),
    GetMuscleByIdUseCase: new GetMuscleById(muscleRepository),
    GetMusclesByIdsUseCase: new GetMusclesByIds(muscleRepository),
  };
};
