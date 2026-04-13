import type { Notifications as PrismaNotification } from '@/prisma/client';
import { Notification } from '@/modules/notification/domain/notification.entity';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';
import type { NotificationDTO } from '@/modules/notification/application/dtos/notification.dto';

export class NotificationMapper {
  static toDomain(data: PrismaNotification): Notification {
    const notification: NotificationProps = {
      id: data.id,
      name: data.name,
      message: data.message,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
    };
    return new Notification(notification);
  }

  static toPersistence(data: Notification): PrismaNotification {
    return {
      id: data.id,
      name: data.name,
      message: data.message,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
    };
  }

  static toDTO(data: Notification): NotificationDTO {
    return {
      name: data.name,
      message: data.message,
      createdAt: data.createdAt,
    };
  }
}
