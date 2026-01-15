import { ITechnicalErrorHandler } from '../../errors/technicalErrorsHanlder.interface';

export class NextAuthErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
