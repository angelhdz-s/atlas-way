import { DomainError } from '@/shared/domain/errors/domain-error';

export class PrismaError extends DomainError {
	constructor(message: string | null = null) {
		super(message ?? 'Unavailable prisma service', 'UNAVAILABLE_PRISMA_SERVICE');
	}
}
