import { TechnicalErrorCodes } from './technicalErrors.codes';

export abstract class TechnicalError extends Error {
	protected code: string | TechnicalErrorCodes;
	constructor(code: string | TechnicalErrorCodes) {
		super();
		this.code = code;
	}
}
