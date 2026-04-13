import { Failure, Success } from '@/shared/domain/result';
import { NotificationMapper } from '@/modules/notification/infrastructure/notification.mapper';
import type { PrismaClient } from '@/prisma/client';
import type { Notification } from '@/modules/notification/domain/notification.entity';
import type { INotificationRepository } from '@/modules/notification/domain/notification.repository';
import type { NotificationProps } from '@/modules/notification/domain/notification.types';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class NotificationPrismaRepository implements INotificationRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly errorMapper: InfrastructureErrorTranslator
  ) {}
  async create(data: Notification) {
    const persistence = NotificationMapper.toPersistence(data);
    try {
      const created = await this.prisma.notifications.create({
        data: persistence,
      });
      const result = NotificationMapper.toDomain(created);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async update(data: Notification) {
    const persistence = NotificationMapper.toPersistence(data);
    try {
      const updated = await this.prisma.notifications.update({
        data: persistence,
        where: { id: data.id },
      });
      const result = NotificationMapper.toDomain(updated);
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findAll() {
    try {
      const notifications = await this.prisma.notifications.findMany();
      const domainNotifications = notifications.map((notification) =>
        NotificationMapper.toDomain(notification)
      );
      return Success(domainNotifications);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
  async findById(id: NotificationProps['id']) {
    try {
      const notification = await this.prisma.notifications.findUnique({
        where: { id },
      });
      const result = notification ? NotificationMapper.toDomain(notification) : null;
      return Success(result);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
