import { GetAllMuscles } from '../application/usecases/find-all-muscles';
import { GetMuscleById } from '../application/usecases/find-muscle-by-id';
import { MusclePrismaRepository } from '../infrastructure/prisma/muscle.prisma.repository';

export const muscleRepo = new MusclePrismaRepository();

const GetAllMusclesUseCase = new GetAllMuscles(muscleRepo);
const GetMuscleByIdUseCase = new GetMuscleById(muscleRepo);

export const MuscleContainer = {
	GetAllMusclesUseCase,
	GetMuscleByIdUseCase,
};
