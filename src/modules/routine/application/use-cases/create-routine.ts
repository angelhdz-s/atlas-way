import { Failure } from '@/shared/domain/result';
import { Routine } from '../../domain/routine.entity';
import { RoutineDays } from '@/modules/routine-days/domain/routine-days.entity';
import type {
  CreateRoutineDaysInput,
  CreateRoutineDaysWithoutRoutineIdInput,
} from '@/modules/routine-days/application/dtos/create-routine-days.dto';
import type { CreateRoutineInput } from '../dtos/create-routine.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IRoutineDaysRepository } from '@/modules/routine-days/domain/routine-days.resporitory';
import type { IRoutineRepository } from '../../domain/routine.repository';
import type { UseCase } from '@/shared/application/use-case';

export class CreateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private routineDayRepository: IRoutineDaysRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(
    routineData: CreateRoutineInput,
    routineDaysData?: CreateRoutineDaysWithoutRoutineIdInput[]
  ) {
    const routineId = this.generator.generate();
    const newRoutine = Routine.create(routineId, routineData);

    const routineCreateResult = await this.routineRepository.create(newRoutine);
    if (!routineCreateResult.success) return routineCreateResult;

    if (routineDaysData && routineDaysData?.length > 0) {
      for (const routineDay of routineDaysData) {
        const routineDayId = this.generator.generate();
        const routineDayInput: CreateRoutineDaysInput = {
          dayNumber: routineDay.dayNumber,
          name: routineDay.name,
          sessionId: routineDay.sessionId,
          routineId,
        };
        const newRoutineDay: RoutineDays = RoutineDays.create(routineDayId, routineDayInput);
        const createRoutineDayResult = await this.routineDayRepository.create(newRoutineDay);
        if (!createRoutineDayResult.success) return Failure(createRoutineDayResult.error);
      }
    }

    return routineCreateResult;
  }
}
