import { DomainError } from '@/shared/domain/errors/domain.errors';

export interface IErrorTranslator {
	translate: (error: unknown) => DomainError | null;
}
