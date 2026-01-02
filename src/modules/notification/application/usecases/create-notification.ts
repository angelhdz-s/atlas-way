import { UseCase } from '@/shared/application/usecase';
import { INotification } from '../../domain/notification.repository';
import { CreateNotificationInput } from '../dtos/create-notification.dto';
import { CuidGeneratior } from '@/shared/infrastructure/uuid-generator';
import { Notification } from '../../domain/notification.entity';

export class CreateNotification implements UseCase {
	constructor(
		private repository: INotification,
		private generator: CuidGeneratior
	) {}

	async execute(data: CreateNotificationInput) {
		const id = this.generator.generate();
		const newNotification = Notification.create(id, data);
		return this.repository.create(newNotification);
	}
}
