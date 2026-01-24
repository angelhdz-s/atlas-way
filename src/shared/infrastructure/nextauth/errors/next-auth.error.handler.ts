import { IErrorHandler } from '../../errors/error-handler.types';

export class NextAuthErrorHandler implements IErrorHandler {
	handle(error: unknown) {
		return null;
	}
}
