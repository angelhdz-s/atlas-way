import { IErrorTranslator } from '../../errors/error-translator.types';

export class PrismaErrorHandler implements IErrorTranslator {
	translate(error: unknown) {
		return null;
	}
}
