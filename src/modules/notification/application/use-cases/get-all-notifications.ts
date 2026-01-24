import { UseCase } from '@/shared/application/use-case';
import { INotification } from '../../domain/notification.repository';

export class GetAllNotifications implements UseCase {
	constructor(private repository: INotification) {}

	async execute() {
		return this.repository.findAll();
	}
}
