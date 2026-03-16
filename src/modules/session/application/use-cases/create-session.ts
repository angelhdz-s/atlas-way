import type { ISessionRepository } from '../../domain/session.repository';
import type { CreateSessionInput } from '../dtos/create-session.dto';
import { Session } from '../../domain/session.entity';
import type { UseCase } from '@/shared/application/use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';

export class CreateSession implements UseCase {
  constructor(
    private sessionRepository: ISessionRepository,
    private exerciseRepository: IExerciseRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateSessionInput) {
    const sessionId = this.generator.generate();

    const { exerciseIds, ...sessionData } = data;

    const exercisesResult = await this.exerciseRepository.findByIds(exerciseIds);

    if (!exercisesResult.success) return exercisesResult;

    const exercises = exercisesResult.data;

    const newSession = Session.create(sessionId, { ...sessionData, exercises });
    const sessionResult = await this.sessionRepository.create(newSession);
    if (!exerciseIds || !sessionResult.success) return sessionResult;

    return sessionResult;
  }
}
