import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { Session } from '@/modules/session/domain/session.entity';
import type { RoutineProps, RoutinePlanDayFactory } from '@/modules/routine/domain/routine.types';
import { Failure, Success } from '@/shared/domain/result';
import { isArrayOf } from '@/shared/domain/validation/validation.utils';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';
import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { isValidFactoryRoutineRoutineDayInput } from '@/modules/routine/domain/validation/routine.routine-day.validation';

export class RoutinePlanValidationService {
  constructor(
    private readonly sessionRepository: ISessionRepository,
    private readonly idGenerator: IdGeneratorRepository
  ) {}

  async createRoutineDays(
    routinePlanInput?: RoutinePlanDayFactory[]
  ): Promise<Result<RoutineProps['plan'] | null, DomainError>> {
    if (!routinePlanInput) return Success(null);

    if (!isArrayOf(routinePlanInput, 'plainObject')) return Failure(new InvalidRoutineData('PLAN'));

    const routineDaysPreparation = routinePlanInput.map((r) => this.validateRoutineDay(r));
    const routineDaysResults = await Promise.all(routineDaysPreparation);

    const routineDays: RoutineProps['plan'] = [];
    for (const routineDaysResult of routineDaysResults) {
      if (!routineDaysResult.success) return routineDaysResult;
      routineDays.push(routineDaysResult.data);
    }

    return Success(routineDays);
  }

  private async validateRoutineDay(
    routinePlanDayInput: RoutinePlanDayFactory
  ): Promise<Result<RoutineProps['plan'][number], DomainError>> {
    if (!isValidFactoryRoutineRoutineDayInput(routinePlanDayInput))
      return Failure(new InvalidRoutineData('PLAN'));

    const idResult = this.idGenerator.generate();
    if (!idResult.success) return idResult;
    const id = idResult.data;

    let session: Session | null = null;

    if (routinePlanDayInput.sessionId !== null) {
      const sessionResult = await this.sessionRepository.findById(routinePlanDayInput.sessionId);
      if (!sessionResult.success) return sessionResult;
      if (!sessionResult.data) return Failure(new SessionNotFoundError());
      session = sessionResult.data;
    }

    const { day, name } = routinePlanDayInput;

    return Success({
      id,
      day,
      name,
      session,
    });
  }
}
