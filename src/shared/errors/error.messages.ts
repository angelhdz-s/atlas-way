import { DomainErrorCode } from '../domain/errors/domain.error.code';
import { TechnicalErrorCodes } from '../infrastructure/errors/technical-errors.codes';

export const errorMessages: Record<DomainErrorCode | TechnicalErrorCodes, string> = {
	ERROR_CODE: 'Error',
	DB_CONNECTION_FAILED: 'Database Unavailable',
};
