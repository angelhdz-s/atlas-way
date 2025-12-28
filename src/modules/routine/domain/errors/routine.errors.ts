import { DomainError } from '@/shared/domain/errors/domain-error';

export class RoutineNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'ROUTINE_NOT_FOUND');
	}
}
