import { Failure } from '@/shared/domain/result';
import { NotificationNotFoundError } from '@/modules/notification/domain/errors/notification.errors';
import type { UseCase } from '@/shared/application/use-case';
import type { INotificationRepository } from '@/modules/notification/domain/notification.repository';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';
import type { UpdateNotificationInput } from '@/modules/notification/application/dtos/update-notification.dto';

export class UpdateNotification implements UseCase {
  constructor(private repository: INotificationRepository) {}

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
