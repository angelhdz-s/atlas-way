import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateRoutineDays } from '@/modules/routine-days/application/use-cases/create-routine-days';
import { GetAllRoutineDays } from '@/modules/routine-days/application/use-cases/get-all-routine-days';
import { GetRoutineDaysById } from '@/modules/routine-days/application/use-cases/get-routine-days-by-id';
import { UpdateRoutineDays } from '@/modules/routine-days/application/use-cases/update-routine-days';
import { RoutineDaysPrismaRepository } from '@/modules/routine-days/infrastructure/prisma/routine-days.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.translator';

export const makeRoutineDaysModule = () => {
	const routineDaysRepo = new RoutineDaysPrismaRepository(prisma, globalErrorMapper);
	return {
		GetAllRoutineDaysUseCase: new GetAllRoutineDays(routineDaysRepo),
		GetRoutineDaysByIdUseCase: new GetRoutineDaysById(routineDaysRepo),
		CreateRoutineDaysUseCase: new CreateRoutineDays(routineDaysRepo, IdGeneratorContainer),
		UpdateRoutineDaysUseCase: new UpdateRoutineDays(routineDaysRepo),
	};
};
