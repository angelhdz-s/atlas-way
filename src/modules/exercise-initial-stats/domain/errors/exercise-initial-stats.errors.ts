import { DomainError } from '@/shared/domain/errors/domain-error';

export class ExcerciseInitialStatsNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_INITIAL_STATS_NOT_FOUND');
	}
}
