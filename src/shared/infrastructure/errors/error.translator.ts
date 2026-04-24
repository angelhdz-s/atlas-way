import { NextAuthErrorHandler } from '@/shared/infrastructure/next-auth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from '@/shared/infrastructure/prisma/errors/prisma.error.handler';
import { type DomainError, TechnicalError } from '@/shared/domain/errors/domain.errors';
import type { IErrorTranslator } from '@/shared/infrastructure/errors/error-translator.types';

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
    console.log(error);
    return new TechnicalError();
  }
}

export const globalErrorMapper = new InfrastructureErrorTranslator(errorHandlersContainer);
