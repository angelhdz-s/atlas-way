import { UseCase } from '@/shared/application/use-case';
import { SessionToExerciseProps } from '../../domain/session-to-exercise.types';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';

export class GetSessionsToExercisesByExerciseId implements UseCase {
	constructor(private repository: ISessionToExerciseRepository) {}

	async execute(exerciseId: SessionToExerciseProps['exerciseId']) {
		return await this.repository.listByExerciseId(exerciseId);
	}
}
