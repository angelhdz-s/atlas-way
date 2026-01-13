import { TechnicalError } from '../errors/technical.errors';

export class PrismaError extends TechnicalError {
	constructor(message: string | null = null) {
		super('UNAVAILABLE_PRISMA_SERVICE');
	}
}
