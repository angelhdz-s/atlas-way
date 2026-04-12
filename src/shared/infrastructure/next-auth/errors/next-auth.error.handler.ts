import type { IErrorTranslator } from '@/shared/infrastructure/errors/error-translator.types';

export class NextAuthErrorHandler implements IErrorTranslator {
  translate(_error: unknown) {
    return null;
  }
}
