import { CreateDto } from '@/shared/application/dtos/create.types';
import { NotificationProps } from '../../domain/notification.types';

export type CreateNotificationInput = CreateDto<NotificationProps>;
