import { RepositoryResult } from '@/shared/domain/repository.result';
import { NotificationProps } from './notification.types';
import { Notification } from './notification.entity';

export interface INotificationRepository {
	create: (data: Notification) => RepositoryResult<Notification>;
	update: (data: Notification) => RepositoryResult<Notification>;
	findAll: () => RepositoryResult<Notification[]>;
	findById: (id: NotificationProps['id']) => RepositoryResult<Notification | null>;
}
