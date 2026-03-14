import { CreateRoutine } from '@/modules/routine/application/use-cases/create-routine';
import { GetAllRoutines } from '@/modules/routine/application/use-cases/get-all-routines';
import { GetRoutineById } from '@/modules/routine/application/use-cases/get-routine-by-id';
import { UpdateRoutine } from '@/modules/routine/application/use-cases/update-routine';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { RoutineDaysPrismaRepository } from '../routine-days/infrastructure/prisma/routine-days.prisma.repository';
import type { RoutinePrismaRepository } from '@/modules/routine/infrastructure/prisma/routine.prisma.repository';

type Props = {
  idGeneratorRepository: IdGeneratorRepository;
  routineRepository: RoutinePrismaRepository;
  routineDaysRepository: RoutineDaysPrismaRepository;
};

export const makeRoutineModule = ({
  idGeneratorRepository,
  routineRepository,
  routineDaysRepository,
}: Props) => {
  return {
    GetAllRoutinesUseCase: new GetAllRoutines(routineRepository),
    GetRoutineByIdUseCase: new GetRoutineById(routineRepository),
    CreateRoutineUseCase: new CreateRoutine(
      routineRepository,
      routineDaysRepository,
      idGeneratorRepository
    ),
    UpdateRoutineUseCase: new UpdateRoutine(routineRepository),
  };
};
