import { ITechnicalErrorHandler } from '../../errors/technical-errors-handler.interface';

export class NextAuthErrorHandler implements ITechnicalErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
