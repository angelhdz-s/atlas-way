import { DomainError } from '@/shared/domain/errors/domain-error';

export class RoutineDaysNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'ROUTINE_DAYS_NOT_FOUND');
	}
}
