import { DomainError } from '@/shared/domain/errors/domain-error';

export class ExerciseNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_NOT_FOUND');
	}
}
