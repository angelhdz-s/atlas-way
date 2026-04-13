import type { UpdateDto } from '@/shared/application/dtos/create.types';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';

type UpdateProps = Pick<NotificationProps, 'name' | 'message'>;
export type UpdateNotificationInput = UpdateDto<UpdateProps>;
