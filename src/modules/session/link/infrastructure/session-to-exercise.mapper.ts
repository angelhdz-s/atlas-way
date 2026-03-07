import type { SessionsToExercises as PrismaSessionToExercise } from '@/prisma/client';
import { SessionToExercise } from '../domain/session-to-exercise.entity';
import type { SessionToExerciseProps } from '../domain/session-to-exercise.types';
import type { SessionToExerciseDTO } from '../application/dtos/session-to-exercise.dto';

export class SessionToExerciseMapper {
  static toDomain(data: PrismaSessionToExercise): SessionToExercise {
    const session: SessionToExerciseProps = {
      exerciseId: data.exerciseId,
      sessionId: data.sessionId,
      createdAt: data.createdAt,
    };

    return new SessionToExercise(session);
  }

  static toPersistence(data: SessionToExercise): PrismaSessionToExercise {
    return {
      exerciseId: data.exerciseId,
      sessionId: data.sessionId,
      createdAt: data.createdAt,
    };
  }
  static toDTO(data: SessionToExercise): SessionToExerciseDTO {
    return {
      createdAt: data.createdAt,
    };
  }
}
