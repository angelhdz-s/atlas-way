import { DomainError } from '@/shared/domain/errors/domain-error';

export class NotificationNotFoundError extends DomainError {
	constructor() {
		super('NOTIFICATION_NOT_FOUND');
	}
}
