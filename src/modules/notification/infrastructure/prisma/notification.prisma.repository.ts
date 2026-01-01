import { Notification } from '../../domain/notification.entity';
import { INotification } from '../../domain/notification.repository';
import { PrismaError } from '@/shared/infrastructure/prisma/prisma.errors';
import { Failure, Success } from '@/shared/domain/result';
import { NotificationProps } from '../../domain/notification.types';
import { NotificationMapper } from '../notification.mapper';
import { prisma } from '@/shared/infrastructure/prisma/client';

export class NotificationPrismaRepository implements INotification {
	async create(data: Notification) {
		const persistence = NotificationMapper.toPersistence(data);
		try {
			const created = await prisma.notifications.create({
				data: persistence,
			});
			const result = NotificationMapper.toDomain(created);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't create notification"));
		}
	}
	async update(data: Notification) {
		const persistence = NotificationMapper.toPersistence(data);
		try {
			const updated = await prisma.notifications.update({
				data: persistence,
				where: { id: data.id },
			});
			const result = NotificationMapper.toDomain(updated);
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't updated notification"));
		}
	}
	async findAll() {
		try {
			const notifications = await prisma.notifications.findMany();
			const domainNotifications = notifications.map((notification) =>
				NotificationMapper.toDomain(notification)
			);
			return Success(domainNotifications);
		} catch {
			return Failure(new PrismaError("Can't find all notifications"));
		}
	}
	async findById(id: NotificationProps['id']) {
		try {
			const notification = await prisma.notifications.findUnique({ where: { id } });
			const result = notification ? NotificationMapper.toDomain(notification) : null;
			return Success(result);
		} catch {
			return Failure(new PrismaError("Can't find notification by id"));
		}
	}
}
