import { DomainError } from '@/shared/domain/errors/domain.errors';

export class SessionNotFoundError extends DomainError {
	constructor() {
		super('SESSION_NOT_FOUND');
	}
}

export class AutenticationServiceUnavailable extends DomainError {
	constructor() {
		super('UNAVAILABLE_AUTENTICATION_SERVICE');
	}
}
