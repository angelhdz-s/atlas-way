import { Notification } from '../../domain/notification.entity';
import { INotification } from '../../domain/notification.repository';
import { Failure, Success } from '@/shared/domain/result';
import { NotificationProps } from '../../domain/notification.types';
import { NotificationMapper } from '../notification.mapper';
import { PrismaClient } from '@/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/error.mapper';

export class NotificationPrismaRepository implements INotification {
	constructor(
		private readonly prisma: PrismaClient,
		private readonly errorMapper: GlobalErrorMapper
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
			return Failure(this.errorMapper.handle(e));
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
			return Failure(this.errorMapper.handle(e));
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
			return Failure(this.errorMapper.handle(e));
		}
	}
	async findById(id: NotificationProps['id']) {
		try {
			const notification = await this.prisma.notifications.findUnique({ where: { id } });
			const result = notification ? NotificationMapper.toDomain(notification) : null;
			return Success(result);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
