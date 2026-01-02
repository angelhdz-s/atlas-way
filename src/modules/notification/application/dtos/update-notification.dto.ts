import { UpdateDto } from '@/shared/application/dtos/create.types';
import { NotificationProps } from '../../domain/notification.types';

type UpdateProps = Pick<NotificationProps, 'name' | 'message'>;
export type UpdateNotificationInput = UpdateDto<UpdateProps>;
