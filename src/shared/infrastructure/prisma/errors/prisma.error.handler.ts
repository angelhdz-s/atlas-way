import { ITechnicalErrorHandler } from '../../errors/error-handler.repository';

export class PrismaErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
