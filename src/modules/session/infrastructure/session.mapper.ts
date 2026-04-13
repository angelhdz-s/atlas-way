import { Session } from '@/modules/session/domain/session.entity';
import { ExerciseMapper } from '@/modules/exercise/infrastructure/exercise.mapper';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type {
  SessionPrisma,
  SessionPrismaCreate,
  SessionPrismaUpdate,
} from '@/modules/session/infrastructure/prisma/session.prisma.types';

export class SessionMapper {
  static toDomain(data: SessionPrisma): Session {
    const session: SessionProps = {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
      exercises: data.sessionToExercise.map((e) => ExerciseMapper.toDomain(e.exercise)),
    };

    return new Session(session);
  }

  static toPersistenceCreate(data: Session): SessionPrismaCreate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      user: {
        connect: {
          id: data.userId,
        },
      },
      sessionToExercise: {
        create: data.exercises.map((e) => ({
          exerciseId: e.id,
          createdAt: new Date(),
        })),
      },
    };
  }
  static toPersistenceUpdate(data: Session): SessionPrismaUpdate {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      user: {
        connect: {
          id: data.userId,
        },
      },
      sessionToExercise: {
        deleteMany: {},
        create: data.exercises.map((e) => ({
          exerciseId: e.id,
          createdAt: new Date(),
        })),
      },
    };
  }
  static toDTO(data: Session): SessionDTO {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      createdAt: data.createdAt,
      exercises: data.exercises.map((e) => ExerciseMapper.toDTO(e)),
      userId: data.userId,
    };
  }
}
