import { DomainError } from '@/shared/domain/errors/domain-error';

export class RoutineDaysNotFoundError extends DomainError {
	constructor() {
		super('ROUTINE_DAYS_NOT_FOUND');
	}
}
