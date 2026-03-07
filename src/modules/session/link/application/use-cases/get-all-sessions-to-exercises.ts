import type { UseCase } from '@/shared/application/use-case';
import type { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';

export class GetAllSessionsToExercises implements UseCase {
  constructor(private repository: ISessionToExerciseRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
