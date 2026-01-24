import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateRoutineDays } from '@/modules/routinedays/application/usecases/create-routinedays';
import { GetAllRoutineDays } from '@/modules/routinedays/application/usecases/get-all-routinedays';
import { GetRoutineDaysById } from '@/modules/routinedays/application/usecases/get-routinedays-by-id';
import { UpdateRoutineDays } from '@/modules/routinedays/application/usecases/update-routinedays';
import { RoutineDaysPrismaRepository } from '@/modules/routinedays/infrastructure/prisma/routinedays.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/error.mapper.container';

export const makeRoutineDaysContainer = () => {
	const routineDaysRepo = new RoutineDaysPrismaRepository(prisma, globalErrorMapper);
	return {
		GetAllRoutineDaysUseCase: new GetAllRoutineDays(routineDaysRepo),
		GetRoutineDaysByIdUseCase: new GetRoutineDaysById(routineDaysRepo),
		CreateRoutineDaysUseCase: new CreateRoutineDays(routineDaysRepo, IdGeneratorContainer),
		UpdateRoutineDaysUseCase: new UpdateRoutineDays(routineDaysRepo),
	};
};
