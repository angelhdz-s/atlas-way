import { NextAuthErrorHandler } from '../nextauth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from '../prisma/errors/prisma.error.handler';
import { ITechnicalErrorHandler } from './technical-errors-handler.interface';

export const errorHandlersContainer: ITechnicalErrorHandler[] = [
	new NextAuthErrorHandler(),
	new PrismaErrorHandler(),
];
