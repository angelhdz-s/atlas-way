import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateRoutineDays } from '../application/usecases/create-routinedays';
import { GetAllRoutineDays } from '../application/usecases/get-all-routinedays';
import { GetRoutineDaysById } from '../application/usecases/get-routinedays-by-id';
import { UpdateRoutineDays } from '../application/usecases/update-routinedays';
import { RoutineDaysPrismaRepository } from '../infrastructure/prisma/routinedays.prisma.repository';

export const routineDaysRepo = new RoutineDaysPrismaRepository();

const GetAllRoutineDaysUseCase = new GetAllRoutineDays(routineDaysRepo);
const GetRoutineDaysByIdUseCase = new GetRoutineDaysById(routineDaysRepo);
const CreateRoutineDaysUseCase = new CreateRoutineDays(routineDaysRepo, IdGeneratorContainer);
const UpdateRoutineDaysUseCase = new UpdateRoutineDays(routineDaysRepo);

export const RoutineDaysContainer = {
	GetAllRoutineDaysUseCase,
	GetRoutineDaysByIdUseCase,
	CreateRoutineDaysUseCase,
	UpdateRoutineDaysUseCase,
};
