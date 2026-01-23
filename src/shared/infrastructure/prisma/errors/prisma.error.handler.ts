import { ITechnicalErrorHandler } from '../../errors/technical-errors-handler.interface';

export class PrismaErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
