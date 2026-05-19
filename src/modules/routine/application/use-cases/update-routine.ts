import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { UpdateRoutineInput } from '@/modules/routine/application/dtos/update-routine.dto';
import { Failure } from '@/shared/domain/result';
import { RoutineNotFoundError } from '@/modules/routine/domain/errors/routine.errors';
import { updateRoutineProperties } from '@/modules/routine/application/helpers/update-routine.use-case.helper';
import { RoutineDaysValidationService } from '@/modules/routine/domain/services/routine-day.validation.service';

export class UpdateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private sessionRepository: ISessionRepository,
    private generatorRepository: IdGeneratorRepository
  ) {}

  async execute(id: RoutineProps['id'], data: UpdateRoutineInput) {
    const routineResult = await this.routineRepository.findById(id);
    if (!routineResult.success) return routineResult;
    if (!routineResult.data) return Failure(new RoutineNotFoundError());

    const routine = routineResult.data;

    const updatePropertiesResult = updateRoutineProperties(data, routine);
    if (!updatePropertiesResult.success) return updatePropertiesResult;

    const routineDaysService = new RoutineDaysValidationService(
      this.sessionRepository,
      this.generatorRepository
    );
    const updateRoutineDaysResult = await routineDaysService.createRoutineDays(data.routineDays);
    if (!updateRoutineDaysResult.success) return updateRoutineDaysResult;
    if (updateRoutineDaysResult.data) routine.changeRoutineDays(updateRoutineDaysResult.data);

    return await this.routineRepository.update(routine);
  }
}
