import { IErrorHandler } from '../../errors/error-handler.repository';

export class PrismaErrorHandler implements IErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
