import { UseCase } from '@/shared/application/usecase';
import { ISessionToExerciseRepository } from '../../domain/session-to-exercise.repository';

export class GetAllSessionsToExercises implements UseCase {
	constructor(private repository: ISessionToExerciseRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
