import { ITechnicalErrorHandler } from '../../errors/technicalErrorsHanlder.interface';

export class PrismaErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
