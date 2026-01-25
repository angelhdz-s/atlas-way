import { DomainError } from '@/shared/domain/errors/domain.errors';

export class ExcerciseInitialStatsNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_INITIAL_STATS_NOT_FOUND');
	}
}
