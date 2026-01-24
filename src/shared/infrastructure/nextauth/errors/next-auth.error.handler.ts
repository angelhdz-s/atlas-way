import { ITechnicalErrorHandler } from '../../errors/error-handler.repository';

export class NextAuthErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
