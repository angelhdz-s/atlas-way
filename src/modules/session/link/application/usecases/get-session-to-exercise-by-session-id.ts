import { UseCase } from '@/shared/application/usecase';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';

export class GetSessionsToExercisesBySessionId implements UseCase {
	constructor(private repository: ISessionToExerciseRepository) {}

	async execute(sessionId: SessionToExerciseProps['sessionId']) {
		return await this.repository.listBySessionId(sessionId);
	}
}
