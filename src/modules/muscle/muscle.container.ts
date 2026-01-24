import { GetAllMuscles } from '@/modules/muscle/application/usecases/find-all-muscles';
import { GetMuscleById } from '@/modules/muscle/application/usecases/find-muscle-by-id';
import { MusclePrismaRepository } from '@/modules/muscle/infrastructure/prisma/muscle.prisma.repository';
import { globalErrorMapper } from '@/shared/infrastructure/error.mapper.container';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const makeMuscleModule = () => {
	const muscleRepo = new MusclePrismaRepository(prisma, globalErrorMapper);
	return {
		GetAllMusclesUseCase: new GetAllMuscles(muscleRepo),
		GetMuscleByIdUseCase: new GetMuscleById(muscleRepo),
	};
};
