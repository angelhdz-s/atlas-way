import { DomainErrorCode } from './domain.error.code';

export abstract class DomainError extends Error {
	constructor(code: DomainErrorCode) {
		super(code);
	}
}

export class TechnicalError extends DomainError {
	constructor() {
		super('TECHNICAL_ERROR');
	}
}
