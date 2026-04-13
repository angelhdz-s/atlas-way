import { CreateRoutine } from '@/modules/routine/application/use-cases/create-routine';
import { GetAllRoutines } from '@/modules/routine/application/use-cases/get-all-routines';
import { GetRoutineById } from '@/modules/routine/application/use-cases/get-routine-by-id';
import { UpdateRoutine } from '@/modules/routine/application/use-cases/update-routine';
import { DeleteRoutine } from '@/modules/routine/application/use-cases/delete-routine';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';

type Props = {
  idGeneratorRepository: IdGeneratorRepository;
  routineRepository: IRoutineRepository;
  sessionRepository: ISessionRepository;
};

export const makeRoutineModule = ({
  idGeneratorRepository,
  routineRepository,
  sessionRepository,
}: Props) => {
  return {
    GetAllRoutinesUseCase: new GetAllRoutines(routineRepository),
    GetRoutineByIdUseCase: new GetRoutineById(routineRepository),
    CreateRoutineUseCase: new CreateRoutine(
      routineRepository,
      sessionRepository,
      idGeneratorRepository
    ),
    UpdateRoutineUseCase: new UpdateRoutine(
      routineRepository,
      sessionRepository,
      idGeneratorRepository
    ),
    DeleteRoutineUseCase: new DeleteRoutine(routineRepository),
  };
};
