import { DomainError } from '@/shared/domain/errors/domain-error';

export interface IErrorTranslator {
	translate: (error: unknown) => DomainError | null;
}
