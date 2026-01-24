import { DomainError } from '../domain/errors/domain-error';
import { Result } from '../domain/result';

export interface UseCase {
	execute: (...args: any) => Promise<Result<any, DomainError>>;
}
