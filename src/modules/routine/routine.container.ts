import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateRoutine } from '@/modules/routine/application/use-cases/create-routine';
import { GetAllRoutines } from '@/modules/routine/application/use-cases/get-all-routines';
import { GetRoutineById } from '@/modules/routine/application/use-cases/get-routine-by-id';
import { RoutinePrismaRepository } from '@/modules/routine/infrastructure/prisma/routine.prisma.repository';
import { UpdateRoutine } from '@/modules/routine/application/use-cases/update-routine';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.mapper';

export const makeRoutineModule = () => {
	const routineRepo = new RoutinePrismaRepository(prisma, globalErrorMapper);
	return {
		GetAllRoutinesUseCase: new GetAllRoutines(routineRepo),
		GetRoutineByIdUseCase: new GetRoutineById(routineRepo),
		CreateRoutineUseCase: new CreateRoutine(routineRepo, IdGeneratorContainer),
		UpdateRoutineUseCase: new UpdateRoutine(routineRepo),
	};
};
