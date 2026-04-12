import type { IErrorTranslator } from '@/shared/infrastructure/errors/error-translator.types';

export class PrismaErrorHandler implements IErrorTranslator {
  translate(_error: unknown) {
    return null;
  }
}
