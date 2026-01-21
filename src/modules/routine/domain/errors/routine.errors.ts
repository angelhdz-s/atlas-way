import { DomainError } from '@/shared/domain/errors/domain-error';

export class RoutineNotFoundError extends DomainError {
	constructor() {
		super('ROUTINE_NOT_FOUND');
	}
}
