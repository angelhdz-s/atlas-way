import { IErrorHandler } from '../../errors/error-handler.types';

export class PrismaErrorHandler implements IErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
