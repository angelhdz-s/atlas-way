import { UseCase } from '@/shared/application/usecase';
import { INotification } from '../../domain/notification.repository';
import { NotificationProps } from '../../domain/notification.types';
import { UpdateNotificationInput } from '../dtos/update-notification.dto';
import { Failure } from '@/shared/domain/result';
import { NotificationNotFoundError } from '../../domain/errors/notification.errors';

export class UpdateNotification implements UseCase {
	constructor(private repository: INotification) {}

	async execute(id: NotificationProps['id'], data: UpdateNotificationInput) {
		const notificationResult = await this.repository.findById(id);

		if (!notificationResult.success || !notificationResult.data) {
			if (!notificationResult.success) return Failure(notificationResult.error);
			return Failure(new NotificationNotFoundError());
		}

		const notification = notificationResult.data;

		if (data.name) notification.changeName(data.name);
		if (data.message) notification.changeMessage(data.message);

		return this.repository.update(notification);
	}
}
