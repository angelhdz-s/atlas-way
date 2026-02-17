import { CreateRoutine } from '@/modules/routine/application/use-cases/create-routine';
import { GetAllRoutines } from '@/modules/routine/application/use-cases/get-all-routines';
import { GetRoutineById } from '@/modules/routine/application/use-cases/get-routine-by-id';
import { RoutinePrismaRepository } from '@/modules/routine/infrastructure/prisma/routine.prisma.repository';
import { UpdateRoutine } from '@/modules/routine/application/use-cases/update-routine';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	idGeneratorRepository: IdGeneratorRepository;
	routineRepository: RoutinePrismaRepository;
};

export const makeRoutineModule = ({ idGeneratorRepository, routineRepository }: Props) => {
	return {
		GetAllRoutinesUseCase: new GetAllRoutines(routineRepository),
		GetRoutineByIdUseCase: new GetRoutineById(routineRepository),
		CreateRoutineUseCase: new CreateRoutine(routineRepository, idGeneratorRepository),
		UpdateRoutineUseCase: new UpdateRoutine(routineRepository),
	};
};
