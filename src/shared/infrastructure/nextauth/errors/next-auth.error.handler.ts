import type { IErrorTranslator } from '../../errors/error-translator.types';

export class NextAuthErrorHandler implements IErrorTranslator {
  translate(_error: unknown) {
    return null;
  }
}
