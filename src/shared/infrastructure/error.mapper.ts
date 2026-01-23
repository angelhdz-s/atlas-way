import { DomainError, TechnicalError } from '../domain/errors/domain-error';
import { ITechnicalErrorHandler } from './errors/technical-errors-handler.interface';

export class GlobalErrorMapper {
	constructor(private handlers: ITechnicalErrorHandler[]) {}

	handle(error: unknown): DomainError {
		for (const handler of this.handlers) {
			const domainError = handler.handle(error);
			if (domainError) return domainError;
		}
		return new TechnicalError();
	}
}
