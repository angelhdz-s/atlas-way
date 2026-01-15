import { DomainErrorCode } from './domain-errors.codes';

export abstract class DomainError extends Error {
	public code: string | DomainErrorCode;
	constructor(
		public readonly message: string,
		code: string | DomainErrorCode
	) {
		super(message);
		this.code = code;
	}
}

export class TechnicalError extends DomainError {
	constructor(
		readonly message: string,
		readonly code: string | DomainErrorCode
	) {
		super(message, code);
	}
}
