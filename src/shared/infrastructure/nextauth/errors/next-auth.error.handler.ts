import { IErrorHandler } from '../../errors/error-handler.repository';

export class NextAuthErrorHandler implements IErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
