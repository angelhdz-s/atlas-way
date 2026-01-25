import { DomainError } from '@/shared/domain/errors/domain.errors';

export class ExerciseNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_NOT_FOUND');
	}
}
