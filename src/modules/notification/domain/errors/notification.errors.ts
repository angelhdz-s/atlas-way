import { DomainError } from '@/shared/domain/errors/domain-error';

export class NotificationNotFoundError extends DomainError {
	constructor(message: string) {
		super(message, 'NOTIFICATION_NOT_FOUND');
	}
}
