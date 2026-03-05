import type { UseCase } from '@/shared/application/use-case';
import type { INotificationRepository } from '../../domain/notification.repository';
import type { CreateNotificationInput } from '../dtos/create-notification.dto';
import { Notification } from '../../domain/notification.entity';
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
