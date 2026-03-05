import type { UseCase } from '@/shared/application/use-case';
import type { INotificationRepository } from '../../domain/notification.repository';
import type { NotificationProps } from '../../domain/notification.types';

export class GetNotificationById implements UseCase {
  constructor(
    private repository: INotificationRepository
  ) {}

  async execute(id: NotificationProps['id']) {
    return this.repository.findById(id);
  }
}
