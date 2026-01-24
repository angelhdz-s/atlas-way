import { UseCase } from '@/shared/application/use-case';
import { INotification } from '../../domain/notification.repository';
import { NotificationProps } from '../../domain/notification.types';

export class GetNotificationById implements UseCase {
	constructor(private repository: INotification) {}

	async execute(id: NotificationProps['id']) {
		return this.repository.findById(id);
	}
}
