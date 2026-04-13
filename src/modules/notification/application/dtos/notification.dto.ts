import type { NotificationProps } from '@/modules/notification/domain/notification.types';

export type NotificationDTO = Pick<NotificationProps, 'name' | 'message' | 'createdAt'>;
