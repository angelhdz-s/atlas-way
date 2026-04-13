import { Notification } from '@/modules/notification/domain/notification.entity';
import type { UseCase } from '@/shared/application/use-case';
import type { INotificationRepository } from '@/modules/notification/domain/notification.repository';
import type { CreateNotificationInput } from '@/modules/notification/application/dtos/create-notification.dto';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

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
