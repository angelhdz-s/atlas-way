import { Failure } from '@/shared/domain/result';
import { Routine } from '../../domain/routine.entity';
import { RoutineCycleNotFound, RoutineNotFoundError } from '../../domain/errors/routine.errors';
import type { CreateRoutineInput } from '../dtos/create-routine.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IRoutineRepository } from '../../domain/routine.repository';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { RoutineProps } from '../../domain/routine.types';
import type { Session } from '@/modules/session/domain/session.entity';
import type { UseCase } from '@/shared/application/use-case';
import { CYCLE_TYPES } from '../../domain/constants/routine.constants.cycle-types';

export class CreateRoutine implements UseCase {
  constructor(
    private routineRepository: IRoutineRepository,
    private sessionRepository: ISessionRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(routineData: CreateRoutineInput) {
    const routineId = this.generator.generate();

    const sessions: (Session | null)[] = [];

    const cycleType = Object.values(CYCLE_TYPES).find((c) => c.id === routineData.cycleId);
    if (!cycleType) return Failure(new RoutineCycleNotFound());

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

    const routineDays: RoutineProps['routineDays'] = routineData.routineDays.map((r, index) => ({
      id: this.generator.generate(),
      day: r.day,
      name: r.name,
      session: sessions[index],
    }));

    const newRoutine = Routine.create(routineId, { ...routineData, cycle: cycleType, routineDays });

    return await this.routineRepository.create(newRoutine);
  }
}
