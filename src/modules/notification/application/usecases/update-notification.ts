import { UseCase } from '@/shared/application/usecase';
import { INotification } from '../../domain/notification.repository';
import { NotificationProps } from '../../domain/notification.types';
import { UpdateNotificationInput } from '../dtos/update-notification.dto';
import { Failure } from '@/shared/domain/result';
import { NotificationNotFoundError } from '../../domain/errors/notification.errors';

export class UpdateNotification implements UseCase {
	constructor(private repository: INotification) {}

	async execute(id: NotificationProps['id'], data: UpdateNotificationInput) {
		const existingNotification = await this.repository.findById(id);

		if (!existingNotification.success || !existingNotification.data) {
			if (!existingNotification.success) return Failure(existingNotification.error);
			return Failure(new NotificationNotFoundError('Notification not found'));
		}

		const notification = existingNotification.data;

		if (data.name) notification.changeName(data.name);
		if (data.message) notification.changeMessage(data.message);

		return this.repository.update(notification);
	}
}
