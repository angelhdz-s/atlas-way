import type { CreateDto } from '@/shared/application/dtos/create.types';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';

export type CreateNotificationInput = CreateDto<NotificationProps>;
