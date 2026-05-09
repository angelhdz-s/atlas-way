import { Failure } from '@/shared/domain/result';
import { Routine } from '@/modules/routine/domain/routine.entity';
import {
  InvalidRoutineDays,
  RoutineNotFoundError,
} from '@/modules/routine/domain/errors/routine.errors';
import type { CreateRoutineInput } from '@/modules/routine/application/dtos/create-routine.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IRoutineRepository } from '@/modules/routine/domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { RoutineProps } from '@/modules/routine/domain/routine.types';
import type { Session } from '@/modules/session/domain/session.entity';
import type { UseCase } from '@/shared/application/shared.use-case';

export class CreateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private sessionRepository: ISessionRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(routineData: CreateRoutineInput) {
    const idResult = await this.generator.generate();
    if (!idResult.success) return idResult;

    const routineId = idResult.data;

    const sessions: (Session | null)[] = [];

    for (const routineDay of routineData.routineDays) {
      if (!routineDay.sessionId) {
        sessions.push(null);
        continue;
      }
      const sessionResult = await this.sessionRepository.findById(routineDay.sessionId);
      if (!sessionResult.success) return sessionResult;
      sessions.push(sessionResult.data);
    }

    if (sessions.length !== routineData.routineDays.length)
      return Failure(new RoutineNotFoundError());

    const routineDays: RoutineProps['routineDays'] = [];

    for (let i = 0; i < routineData.routineDays.length; i++) {
      const routineDay = routineData.routineDays[i];
      if (!routineDay) return Failure(new InvalidRoutineDays());

      const sessionIdResult = await this.generator.generate();
      if (!sessionIdResult.success) return sessionIdResult;
      const sessionId = sessionIdResult.data;

      routineDays.push({
        id: sessionId,
        day: routineDay.day,
        name: routineDay.name,
        session: sessions[i] ?? null,
      });
    }

    const newRoutineResult = Routine.create(routineId, {
      ...routineData,
      routineDays,
    });
    if (!newRoutineResult.success) return newRoutineResult;

    return await this.routineRepository.create(newRoutineResult.data);
  }
}
