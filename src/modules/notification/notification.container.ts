import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateNotification } from '@/modules/notification/application/usecases/create-notification';
import { GetAllNotifications } from '@/modules/notification/application/usecases/get-all-notifications';
import { GetNotificationById } from '@/modules/notification/application/usecases/get-notification-by-id';
import { UpdateNotification } from '@/modules/notification/application/usecases/update-notification';
import { NotificationPrismaRepository } from '@/modules/notification/infrastructure/prisma/notification.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const makeNotificationModule = () => {
	const notificationRepo = new NotificationPrismaRepository(prisma);
	return {
		GetAllNotificationsUseCase: new GetAllNotifications(notificationRepo),
		GetNotificationByIdUseCase: new GetNotificationById(notificationRepo),
		CreateNotificationUseCase: new CreateNotification(notificationRepo, IdGeneratorContainer),
		UpdateNotificationUseCase: new UpdateNotification(notificationRepo),
	};
};
