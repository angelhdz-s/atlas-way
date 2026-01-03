import { NotificationProps } from '../../domain/notification.types';

export type NotificationDTO = Pick<NotificationProps, 'name' | 'message' | 'createdAt'>;
