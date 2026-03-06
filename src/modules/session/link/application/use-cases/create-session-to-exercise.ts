import type { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';
import type { UseCase } from '@/shared/application/use-case';
import type { CreateSessionToExerciseInput } from '../dtos/create-session-to-exercise.dto';
import { SessionToExercise } from '../../domain/session-to-exercise.entity';

export class CreateSessionToExercise implements UseCase {
  constructor(private repository: ISessionToExerciseRepository) {}

  async execute(data: CreateSessionToExerciseInput) {
    const newSessionToExercise = SessionToExercise.create(data);
    return await this.repository.create(newSessionToExercise);
  }
}
