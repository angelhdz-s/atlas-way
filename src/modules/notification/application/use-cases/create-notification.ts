import { UseCase } from '@/shared/application/use-case';
import { INotificationRepository } from '../../domain/notification.repository';
import { CreateNotificationInput } from '../dtos/create-notification.dto';
import { Notification } from '../../domain/notification.entity';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

export class CreateNotification implements UseCase {
	constructor(
		private repository: INotificationRepository,
		private generator: IdGeneratorRepository
	) {}

	async execute(data: CreateNotificationInput) {
		const id = this.generator.generate();
		const newNotification = Notification.create(id, data);
		return this.repository.create(newNotification);
	}
}
