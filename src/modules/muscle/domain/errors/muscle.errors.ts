import { DomainError } from '@/shared/domain/errors/domain.errors';

export class MuscleNotFoundError extends DomainError {
	constructor() {
		super('MUSCLE_NOT_FOUND');
	}
}
