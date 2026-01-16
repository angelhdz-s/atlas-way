import { NextAuthErrorHandler } from '../nextauth/errors/next-auth.error.handler';
import { PrismaErrorHandler } from '../prisma/errors/prisma.error.handler';
import { ITechnicalErrorHandler } from './technicalErrorsHanlder.interface';

export const technicalErrorsContainer: ITechnicalErrorHandler[] = [
	new NextAuthErrorHandler(),
	new PrismaErrorHandler(),
];
