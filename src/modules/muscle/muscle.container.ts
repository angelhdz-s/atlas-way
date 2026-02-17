import { GetAllMuscles } from '@/modules/muscle/application/use-cases/find-all-muscles';
import { GetMuscleById } from '@/modules/muscle/application/use-cases/find-muscle-by-id';
import { IMuscleRepository } from './domain/muscle.repository';

type Props = {
	muscleRepository: IMuscleRepository;
};

export const makeMuscleModule = ({ muscleRepository }: Props) => {
	return {
		GetAllMusclesUseCase: new GetAllMuscles(muscleRepository),
		GetMuscleByIdUseCase: new GetMuscleById(muscleRepository),
	};
};
