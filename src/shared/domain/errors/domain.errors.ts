import type { DomainErrorCode } from '@/shared/domain/errors/error.types';

export abstract class DomainError extends Error {
  public readonly code: DomainErrorCode;
  constructor(code: DomainErrorCode) {
    super(code);
    this.code = code;
    this.name = new.target.name;
  }
}

export class TechnicalError extends DomainError {
  constructor() {
    super('TECHNICAL_ERROR');
  }
}
