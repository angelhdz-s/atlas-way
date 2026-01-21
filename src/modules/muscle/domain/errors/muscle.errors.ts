import { DomainError } from '@/shared/domain/errors/domain-error';

export class MuscleNotFoundError extends DomainError {
	constructor() {
		super('MUSCLE_NOT_FOUND');
	}
}
