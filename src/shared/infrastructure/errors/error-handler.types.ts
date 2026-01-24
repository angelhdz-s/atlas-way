import { DomainError } from '@/shared/domain/errors/domain-error';

export interface IErrorHandler {
	handle: (error: unknown) => DomainError | null;
}
