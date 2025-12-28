import { DomainError } from '@/shared/domain/errors/domain-error';

export class MuscleNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'MUSCLE_NOT_FOUND');
	}
}
