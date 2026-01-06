import { DomainError } from '@/shared/domain/errors/domain-error';

export class ExerciseToMuscleNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'EXERCISE_TO_MUSCLE_NOT_FOUND');
	}
}
