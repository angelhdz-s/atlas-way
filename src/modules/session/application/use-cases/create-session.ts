import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { CreateSessionInput } from '@/modules/session/application/dtos/create-session.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import type { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { Session } from '@/modules/session/domain/session.entity';
import { ExerciseNotFoundError } from '@/modules/exercise/domain/errors/exercise.errors';
import { Failure } from '@/shared/domain/result';

export class CreateSession implements UseCase {
  constructor(
    private sessionRepository: ISessionRepository,
    private exerciseRepository: IExerciseRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateSessionInput) {
    const idResult = await this.generator.generate();
    if (!idResult.success) return idResult;

    const sessionId = idResult.data;

    const { exerciseIds, ...sessionData } = data;

    const exercises: Exercise[] = [];
    for (const exerciseId of exerciseIds) {
      const exerciseResult = await this.exerciseRepository.findById(exerciseId);
      if (!exerciseResult.success) return exerciseResult;
      if (!exerciseResult.data) return Failure(new ExerciseNotFoundError());
      exercises.push(exerciseResult.data);
    }

    const newSessionResult = Session.create(sessionId, { ...sessionData, exercises });
    if (!newSessionResult.success) return newSessionResult;
    const sessionResult = await this.sessionRepository.create(newSessionResult.data);
    if (!sessionResult.success) return sessionResult;

    return sessionResult;
  }
}
