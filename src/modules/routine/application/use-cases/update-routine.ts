import { CYCLE_TYPES } from '../../domain/constants/routine.constants.cycle-types';
import { Failure } from '@/shared/domain/result';
import { RoutineCycleNotFound, RoutineNotFoundError } from '../../domain/errors/routine.errors';
import type { IRoutineRepository } from '../../domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { RoutineProps } from '../../domain/routine.types';
import type { UpdateRoutineInput } from '../dtos/update-routine.dto';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

export class UpdateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private sessionRepository: ISessionRepository,
    private generatorRepository: IdGeneratorRepository
  ) {}

  async execute(id: RoutineProps['id'], data: UpdateRoutineInput) {
    const routineResult = await this.routineRepository.findById(id);
    if (!routineResult.success || !routineResult.data) {
      if (!routineResult.success) return Failure(routineResult.error);
      return Failure(new RoutineNotFoundError());
    }

    const routine = routineResult.data;

    if (data.name) routine.changeName(data.name);
    if (data.description) routine.changeDescription(data.description);
    if (data.active) routine.changeActive(data.active);
    if (data.days) routine.changeDays(data.days);
    if (data.initialDate) routine.changeInitialDate(data.initialDate);
    if (data.cycleId) {
      const cycleType = Object.values(CYCLE_TYPES).find((c) => c.id === data.cycleId);
      if (!cycleType) return Failure(new RoutineCycleNotFound());
      routine.changeCycle(cycleType);
    }
    if (data.routineDays) {
      const routineDays: RoutineProps['routineDays'] = [];
      for (const routineDay of data.routineDays) {
        const routineDayBaseProps: Omit<RoutineProps['routineDays'][number], 'session'> = {
          id: this.generatorRepository.generate(),
          day: routineDay.day,
          name: routineDay.name,
        };
        if (!routineDay.sessionId) {
          routineDays.push({
            ...routineDayBaseProps,
            session: null,
          });
          continue;
        }
        const sessionResult = await this.sessionRepository.findById(routineDay.sessionId);
        if (!sessionResult.success) return sessionResult;
        routineDays.push({
          ...routineDayBaseProps,
          session: sessionResult.data,
        });
      }
      routine.changeRoutineDays(routineDays);
    }

    return await this.routineRepository.update(routine);
  }
}
