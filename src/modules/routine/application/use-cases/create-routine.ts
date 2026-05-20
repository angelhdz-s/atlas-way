import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { CreateRoutineInput } from '@/modules/routine/application/dtos/create-routine.dto';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import { Failure } from '@/shared/domain/result';
import { Routine } from '@/modules/routine/domain/routine.entity';
import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { RoutinePlanValidationService } from '@/modules/routine/domain/services/routine-plan.validation.service';

export class CreateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private sessionRepository: ISessionRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(routineData: CreateRoutineInput) {
    const idResult = this.generator.generate();
    if (!idResult.success) return idResult;

    const routineId = idResult.data;

    const routineDaysService = new RoutinePlanValidationService(
      this.sessionRepository,
      this.generator
    );
    const routineDaysResult = await routineDaysService.createRoutineDays(routineData.plan);
    if (!routineDaysResult.success) return routineDaysResult;
    if (!routineDaysResult.data) return Failure(new InvalidRoutineData('PLAN_LENGTH'));
    const routineDays = routineDaysResult.data;

    const newRoutineResult = Routine.create(routineId, {
      ...routineData,
      plan: routineDays,
    });

    if (!newRoutineResult.success) return newRoutineResult;

    return await this.routineRepository.create(newRoutineResult.data);
  }
}
