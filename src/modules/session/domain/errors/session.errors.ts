import { DomainError } from '@/shared/domain/errors/domain-error';

export class SessionNotFoundError extends DomainError {
	constructor() {
		super('SESSION_NOT_FOUND');
	}
}
