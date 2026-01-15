import { DomainError, TechnicalError } from '../domain/errors/domain-error';
import { NextAuthErrorHandler } from './nextauth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from './prisma/errors/prisma.error.handler';

export class GlobalErrorMapper {
	static toDomainError(error: unknown): DomainError {
		const nextAuthHandler = new NextAuthErrorHandler();
		const nextAuthError = nextAuthHandler.handle(error);
		if (nextAuthError) return nextAuthError;

		const prismaHandler = new PrismaErrorHandler();
		const prismaError = prismaHandler.handle(error);
		if (prismaError) return prismaError;

		return new TechnicalError('Unavailable service', 'UNAVAILABLE_SERVICE');
	}
}
