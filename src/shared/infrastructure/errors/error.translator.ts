import { DomainError, TechnicalError } from '../../domain/errors/domain.errors';
import { IErrorTranslator } from './error-translator.types';
import { NextAuthErrorHandler } from '../nextauth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from '../prisma/errors/prisma.error.handler';

export const errorHandlersContainer: IErrorTranslator[] = [
	new NextAuthErrorHandler(),
	new PrismaErrorHandler(),
];

export class InfrastructureErrorTranslator {
	constructor(private readonly translators: IErrorTranslator[]) {}
	translate(error: unknown): DomainError {
		for (const handler of this.translators) {
			const domainError = handler.translate(error);
			if (domainError) return domainError;
		}
		return new TechnicalError();
	}
}

export const globalErrorMapper = new InfrastructureErrorTranslator(errorHandlersContainer);
