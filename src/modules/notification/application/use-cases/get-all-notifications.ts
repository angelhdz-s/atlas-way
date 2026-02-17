import { UseCase } from '@/shared/application/use-case';
import { INotificationRepository } from '../../domain/notification.repository';

export class GetAllNotifications implements UseCase {
	constructor(private repository: INotificationRepository) {}

	async execute() {
		return this.repository.findAll();
	}
}
