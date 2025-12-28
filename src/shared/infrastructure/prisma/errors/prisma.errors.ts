import { DomainError } from '@/shared/domain/errors/domain-error';

export class PrismaError extends DomainError {
	constructor(message: string) {
		super(message, 'PRISMA_ERROR');
	}
}
