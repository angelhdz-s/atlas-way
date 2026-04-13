import type { RepositoryResult } from '@/shared/domain/repository.result';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';
import type { Notification } from '@/modules/notification/domain/notification.entity';

export interface INotificationRepository {
  create: (data: Notification) => RepositoryResult<Notification>;
  update: (data: Notification) => RepositoryResult<Notification>;
  findAll: () => RepositoryResult<Notification[]>;
  findById: (id: NotificationProps['id']) => RepositoryResult<Notification | null>;
}
