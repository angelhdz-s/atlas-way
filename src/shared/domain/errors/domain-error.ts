import { DomainErrorCode } from './domain.error.code';

export abstract class DomainError extends Error {
	constructor(code: string | DomainErrorCode) {
		super(code);
	}
}

export class TechnicalError extends DomainError {
	constructor(readonly code: string | DomainErrorCode) {
		super(code);
	}
}
