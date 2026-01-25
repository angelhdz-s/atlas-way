import { IErrorTranslator } from '../../errors/error-translator.types';

export class NextAuthErrorHandler implements IErrorTranslator {
	translate(error: unknown) {
		return null;
	}
}
