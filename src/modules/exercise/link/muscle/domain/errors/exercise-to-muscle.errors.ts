import { DomainError } from '@/shared/domain/errors/domain.errors';

export class ExerciseToMuscleNotFoundError extends DomainError {
	constructor() {
		super('EXERCISE_TO_MUSCLE_NOT_FOUND');
	}
}
