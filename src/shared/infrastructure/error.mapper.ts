import { DomainError, TechnicalError } from '../domain/errors/domain-error';
import { IErrorHandler } from './errors/error-handler.types';
import { NextAuthErrorHandler } from './nextauth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from './prisma/errors/prisma.error.handler';

export const errorHandlersContainer: IErrorHandler[] = [
	new NextAuthErrorHandler(),
	new PrismaErrorHandler(),
];

export class GlobalErrorMapper {
	constructor(private handlers: IErrorHandler[]) {}

	handle(error: unknown): DomainError {
		for (const handler of this.handlers) {
			const domainError = handler.handle(error);
			if (domainError) return domainError;
		}
		return new TechnicalError();
	}
}

export const globalErrorMapper = new GlobalErrorMapper(errorHandlersContainer);
