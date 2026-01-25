import { DomainError } from '../domain/errors/domain.errors';
import { Result } from '../domain/result';

export interface UseCase {
	execute: (...args: any) => Promise<Result<any, DomainError>>;
}
