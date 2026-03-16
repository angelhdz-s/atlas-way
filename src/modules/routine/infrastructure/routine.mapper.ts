import { Routine } from '../domain/routine.entity';
import type { RoutineProps } from '../domain/routine.types';
import type { RoutineDTO } from '../application/dtos/routine.dto';
import type {
  RoutinePrisma,
  RoutinePrismaCreate,
  RoutinePrismaUpdate,
} from './prisma/routine.prisma.types';
import { SessionMapper } from '@/modules/session/infrastructure/session.mapper';
import type { RoutineCycleId } from '../domain/constants/routine.constants.cycle-types';

export class RoutineMapper {
  static toDomain(data: RoutinePrisma): Routine {
    const routine: RoutineProps = {
      id: data.id,
      name: data.name,
      description: data.description,
      initialDate: data.initialDate,
      days: data.days,
      active: data.active,
      cycle: {
        id: data.cycleType.id as RoutineCycleId,
        name: data.cycleType.name,
      },
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
      routineDays: data.routineDays.map((r) => ({
        id: r.id,
        day: r.dayNumber,
        name: r.name,
        session: r.session ? SessionMapper.toDomain(r.session) : null,
      })),
    };

    return new Routine(routine);
  }

  static toPersistenceCreate(data: Routine): RoutinePrismaCreate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      initialDate: data.initialDate,
      days: data.days,
      cycleType: {
        connect: {
          id: data.cycle.id,
        },
      },
      active: data.active,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      user: {
        connect: {
          id: data.userId,
        },
      },
      routineDays: {
        create: data.routineDays.map((r) => ({
          id: r.id,
          name: r.name,
          dayNumber: r.day,
          sessionId: r.session?.id ?? null,
        })),
      },
    };
  }

  static toPersistenceUpdate(data: Routine): RoutinePrismaUpdate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      initialDate: data.initialDate,
      days: data.days,
      active: data.active,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      routineDays: {
        deleteMany: {},
        create: data.routineDays.map((r) => ({
          id: r.id,
          dayNumber: r.day,
          name: r.name,
          sessionId: r.session?.id ?? null,
        })),
      },
    };
  }

  static toDTO(data: Routine): RoutineDTO {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      active: data.active,
      days: data.days,
      initialDate: data.initialDate,
      createdAt: data.createdAt,
      userId: data.userId,
      cycle: data.cycle,
      routineDays: data.routineDays.map((r) => ({
        day: r.day,
        name: r.name,
        session: r.session ? SessionMapper.toDTO(r.session) : null,
      })),
    };
  }
}
