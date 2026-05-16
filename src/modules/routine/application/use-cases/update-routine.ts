import type { Result } from '@/shared/domain/result';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { UpdateRoutineInput } from '@/modules/routine/application/dtos/update-routine.dto';
import type { Routine } from '@/modules/routine/domain/routine.entity';
import { Failure, Success } from '@/shared/domain/result';
import { isArray } from '@/shared/domain/validation/validation.non-primitives';
import {
  InvalidRoutineData,
  RoutineNotFoundError,
} from '@/modules/routine/domain/errors/routine.errors';
import { updateRoutineProperties } from '@/modules/routine/application/helpers/update-routine.use-case.helper';

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

    const updatePropertiesResult = updateRoutineProperties(data, routine);
    if (!updatePropertiesResult.success) return updatePropertiesResult;

    const updateRoutineDaysResult = await this.updateRoutineDays(data.routineDays, routine);
    if (!updateRoutineDaysResult.success) return updateRoutineDaysResult;

    return await this.routineRepository.update(routine);
  }

  private async updateRoutineDays(
    routineDaysInput: UpdateRoutineInput['routineDays'],
    routine: Routine
  ): Promise<Result<null, DomainError>> {
    if (!routineDaysInput) return Success(null);
    if (!isArray(routineDaysInput)) return Failure(new InvalidRoutineData('ROUTINE_DAYS'));

    const routineDays: RoutineProps['routineDays'] = [];
    const routineDaysPromises = routineDaysInput.map((r) => this.generatePromises(r.sessionId));
    const routineDaysResults = await Promise.all(routineDaysPromises);

    for (let i = 0; i < routineDaysResults.length; i++) {
      const results = routineDaysResults[i];
      const routineDay = routineDaysInput[i];
      if (!results || !routineDay) continue;

      const [idResult, sessionResult] = results;
      if (!idResult.success) return idResult;
      if (!sessionResult.success) return sessionResult;

      const { day, name } = routineDay;
      routineDays.push({
        id: idResult.data,
        day,
        name,
        session: sessionResult.data,
      });
    }
    const routineDaysResult = routine.changeRoutineDays(routineDays);
    if (!routineDaysResult.success) return routineDaysResult;

    return Success(null);
  }

  private generatePromises(sessionId: string | null) {
    if (sessionId === null)
      return Promise.all([this.generatorRepository.generate(), Success(null)]);

    return Promise.all([
      this.generatorRepository.generate(),
      this.sessionRepository.findById(sessionId),
    ]);
  }
}
