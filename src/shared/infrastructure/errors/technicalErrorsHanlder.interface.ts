import { DomainError } from '@/shared/domain/errors/domain-error';

export interface ITechnicalErrorHandler {
	handle: (error: unknown) => DomainError | null;
}
