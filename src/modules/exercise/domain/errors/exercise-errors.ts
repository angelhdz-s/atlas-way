import { DomainError } from '@/shared/domain/errors/domain-error';

export class ExerciseNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'EXERCISE_NOT_FOUND');
	}
}
