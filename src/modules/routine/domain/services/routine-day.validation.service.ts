import type { Result } from '@/shared/domain/result';
import type { DomainError } from '@/shared/domain/errors/domain.errors';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { Session } from '@/modules/session/domain/session.entity';
import type {
  RoutineProps,
  RoutineRoutineDayFactory,
} from '@/modules/routine/domain/routine.types';
import { Failure, Success } from '@/shared/domain/result';
import { isArrayOf } from '@/shared/domain/validation/validation.utils';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';
import { InvalidRoutineData } from '@/modules/routine/domain/errors/routine.errors';
import { isValidFactoryRoutineRoutineDayInput } from '@/modules/routine/domain/validation/routine.routine-day.validation';

export class RoutineDaysValidationService {
  constructor(
    private readonly sessionRepository: ISessionRepository,
    private readonly idGenerator: IdGeneratorRepository
  ) {}

  async createRoutineDays(
    routineDaysInput?: RoutineRoutineDayFactory[]
  ): Promise<Result<RoutineProps['routineDays'] | null, DomainError>> {
    if (!routineDaysInput) return Success(null);

    if (!isArrayOf(routineDaysInput, 'plainObject'))
      return Failure(new InvalidRoutineData('ROUTINE_DAYS'));

    const routineDaysPreparation = routineDaysInput.map((r) => this.validateRoutineDay(r));
    const routineDaysResults = await Promise.all(routineDaysPreparation);

    const routineDays: RoutineProps['routineDays'] = [];
    for (const routineDaysResult of routineDaysResults) {
      if (!routineDaysResult.success) return routineDaysResult;
      routineDays.push(routineDaysResult.data);
    }

    return Success(routineDays);
  }

  private async validateRoutineDay(
    routineDayInput: RoutineRoutineDayFactory
  ): Promise<Result<RoutineProps['routineDays'][number], DomainError>> {
    if (!isValidFactoryRoutineRoutineDayInput(routineDayInput))
      return Failure(new InvalidRoutineData('ROUTINE_DAYS'));

    const idResult = this.idGenerator.generate();
    if (!idResult.success) return idResult;
    const id = idResult.data;

    let session: Session | null = null;

    if (routineDayInput.sessionId !== null) {
      const sessionResult = await this.sessionRepository.findById(routineDayInput.sessionId);
      if (!sessionResult.success) return sessionResult;
      if (!sessionResult.data) return Failure(new SessionNotFoundError());
      session = sessionResult.data;
    }

    const { day, name } = routineDayInput;

    return Success({
      id,
      day,
      name,
      session,
    });
  }
}
