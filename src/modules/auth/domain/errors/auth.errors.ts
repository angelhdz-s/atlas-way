import { DomainError } from '@/shared/domain/errors/domain-error';

export class SessionNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'SESSION_NOT_FOUND');
	}
}

export class AutenticationServiceUnavailable extends DomainError {
	constructor(message: string) {
		super(message, 'UNAVAILABLE_AUTENTICATION_SERVICE');
	}
}
