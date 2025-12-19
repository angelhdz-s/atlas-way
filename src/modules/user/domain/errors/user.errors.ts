import { DomainError } from '@/shared/domain/errors/domain-error';

export class UserNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'USER_NOT_FOUND');
	}
}
