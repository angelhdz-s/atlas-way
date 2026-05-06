import { Notification } from '@/modules/notification/domain/notification.entity';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { INotificationRepository } from '@/modules/notification/domain/notification.repository';
import type { CreateNotificationInput } from '@/modules/notification/application/dtos/create-notification.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator.repository';

export class CreateNotification implements UseCase {
  constructor(
    private repository: INotificationRepository,
    private generator: IdGeneratorRepository
  ) {}

  async execute(data: CreateNotificationInput) {
    const idResult = await this.generator.generate();
    if (!idResult.success) return idResult;

    const notificationId = idResult.data;

    const newNotification = Notification.create(notificationId, data);
    return this.repository.create(newNotification);
  }
}
