import { ISessionRepository } from '../../domain/session.repository';
import { CreateSessionInput } from '../dtos/create-session.dto';
import { Session } from '../../domain/session.entity';
import { UseCase } from '@/shared/application/usecase';
import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { ISessionToExerciseRepository } from '../../link/domain/session-to-exercise.repository';
import { SessionToExercise } from '../../link/domain/session-to-exercise.entity';
import { IdGenerator } from '@/shared/application/id-generator';
import { CreateSessionToExerciseInput } from '../../link/application/dtos/create-session-to-exercise.dto';
import { Failure } from '@/shared/domain/result';

export class CreateSession implements UseCase {
	constructor(
		private repository: ISessionRepository,
		private linkRepository: ISessionToExerciseRepository,
		private generator: IdGenerator
	) {}

	async execute(data: CreateSessionInput, exerciseIds: ExerciseProps['id'][] | null = null) {
		const sessionId = this.generator.generate();
		const newSession = Session.create(sessionId, data);
		const sessionCreateResult = await this.repository.create(newSession);
		if (!exerciseIds || !sessionCreateResult.success) return sessionCreateResult;

		for (const exerciseId of exerciseIds) {
			const newSessionLinkProps: CreateSessionToExerciseInput = {
				sessionId,
				exerciseId,
			};
			const newSessionToExercise = SessionToExercise.create(newSessionLinkProps);
			const createResult = await this.linkRepository.create(newSessionToExercise);
			if (!createResult.success) return Failure(createResult.error);
		}

		return sessionCreateResult;
	}
}
