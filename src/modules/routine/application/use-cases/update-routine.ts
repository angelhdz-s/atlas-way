import { Failure } from '@/shared/domain/result';
import { RoutineNotFoundError } from '@/modules/routine/domain/errors/routine.errors';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { UpdateRoutineInput } from '@/modules/routine/application/dtos/update-routine.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import { SessionNotFoundError } from '@/modules/session/domain/errors/session.errors';

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

    if (data.name) {
      const nameResult = routine.changeName(data.name);
      if (!nameResult.success) return nameResult;
    }
    if (data.description) {
      const descResult = routine.changeDescription(data.description);
      if (!descResult.success) return descResult;
    }
    if (data.active !== undefined) {
      const activeResult = routine.changeActive(data.active);
      if (!activeResult.success) return activeResult;
    }
    if (data.days) {
      const daysResult = routine.changeDays(data.days);
      if (!daysResult.success) return daysResult;
    }
    if (data.initialDate) {
      const dateResult = routine.changeInitialDate(data.initialDate);
      if (!dateResult.success) return dateResult;
    }
    if (data.cycleId) {
      const cycleResult = routine.changeCycle(data.cycleId);
      if (!cycleResult.success) return cycleResult;
    }
    if (data.routineDays) {
      const routineDays: RoutineProps['routineDays'] = [];
      for (const routineDay of data.routineDays) {
        const idResult = await this.generatorRepository.generate();
        if (!idResult.success) return idResult;

        const routineDayId = idResult.data;

        const routineDayBaseProps: Omit<RoutineProps['routineDays'][number], 'session'> = {
          id: routineDayId,
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
        if (!sessionResult.data) return Failure(new SessionNotFoundError());
        routineDays.push({
          ...routineDayBaseProps,
          session: sessionResult.data,
        });
      }
      const routineDaysResult = routine.changeRoutineDays(routineDays);
      if (!routineDaysResult.success) return routineDaysResult;
    }

    return await this.routineRepository.update(routine);
  }
}
