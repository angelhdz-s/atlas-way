import type { UseCase } from '@/shared/application/use-case';
import type { SessionToExerciseProps } from '../../domain/session-to-exercise.types';
import type { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';

export class GetSessionsToExercisesBySessionAndExerciseId implements UseCase {
  constructor(
    private repository: ISessionToExerciseRepository
  ) {}

  async execute(data: {
    sessionId: SessionToExerciseProps['sessionId'];
    exerciseId: SessionToExerciseProps['exerciseId'];
  }) {
    return await this.repository.findBySessionAndExerciseId(
      data
    );
  }
}
