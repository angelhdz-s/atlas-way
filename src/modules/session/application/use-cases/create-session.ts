import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { CreateSessionInput } from '@/modules/session/application/dtos/create-session.dto';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';
import type { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { Session } from '@/modules/session/domain/session.entity';
import { InvalidExerciseData } from '@/modules/exercise/domain/errors/exercise.errors';
import { Failure } from '@/shared/domain/result';
import { ExerciseValidationService } from '@/modules/exercise/domain/services/exercise.validation.service';

export class CreateSession implements UseCase {
  constructor(
    private sessionRepository: ISessionRepository,
    private exerciseRepository: IExerciseRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateSessionInput) {
    const idResult = this.generator.generate();
    if (!idResult.success) return idResult;

    const sessionId = idResult.data;

    const { exerciseIds, ...sessionData } = data;

    const exerciseValidationService = new ExerciseValidationService(this.exerciseRepository);
    const exerciseValidatioResult = await exerciseValidationService.validateAndFetch(
      data.exerciseIds
    );
    if (!exerciseValidatioResult.success) return exerciseValidatioResult;
    if (!exerciseValidatioResult.data) return Failure(new InvalidExerciseData());

    const newSessionResult = Session.create(sessionId, {
      ...sessionData,
      exercises: exerciseValidatioResult.data,
    });

    if (!newSessionResult.success) return newSessionResult;
    const sessionResult = await this.sessionRepository.create(newSessionResult.data);
    if (!sessionResult.success) return sessionResult;

    return sessionResult;
  }
}
