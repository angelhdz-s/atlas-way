import { UseCase } from '@/shared/application/use-case';
import { INotificationRepository } from '../../domain/notification.repository';
import { NotificationProps } from '../../domain/notification.types';

export class GetNotificationById implements UseCase {
	constructor(private repository: INotificationRepository) {}

	async execute(id: NotificationProps['id']) {
		return this.repository.findById(id);
	}
}
