import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateRoutine } from '../application/usecases/create-routine';
import { GetAllRoutines } from '../application/usecases/get-all-routines';
import { GetRoutineById } from '../application/usecases/get-routine-by-id';
import { RoutinePrismaRepository } from '../infrastructure/prisma/routine.prisma.repository';
import { UpdateRoutine } from '../application/usecases/update-routine';

export const routineRepo = new RoutinePrismaRepository();

const GetAllRoutinesUseCase = new GetAllRoutines(routineRepo);
const GetRoutineByIdUseCase = new GetRoutineById(routineRepo);
const CreateRoutineUseCase = new CreateRoutine(routineRepo, IdGeneratorContainer);
const UpdateRoutineUseCase = new UpdateRoutine(routineRepo);

export const RoutineContainer = {
	GetAllRoutinesUseCase,
	GetRoutineByIdUseCase,
	CreateRoutineUseCase,
	UpdateRoutineUseCase,
};
