import type { IErrorTranslator } from '../../errors/error-translator.types';

export class PrismaErrorHandler implements IErrorTranslator {
  translate(_error: unknown) {
    return null;
  }
}
