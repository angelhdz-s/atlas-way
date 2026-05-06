import type { UseCase } from '@/shared/application/shared.use-case';
import type { INotificationRepository } from '@/modules/notification/domain/notification.repository';

export class GetAllNotifications implements UseCase {
  constructor(private repository: INotificationRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
