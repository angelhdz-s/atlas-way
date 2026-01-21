import { DomainError } from '@/shared/domain/errors/domain-error';

export class ExerciseToMuscleNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_TO_MUSCLE_NOT_FOUND');
	}
}
