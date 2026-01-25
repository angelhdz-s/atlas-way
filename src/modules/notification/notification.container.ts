import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateNotification } from '@/modules/notification/application/use-cases/create-notification';
import { GetAllNotifications } from '@/modules/notification/application/use-cases/get-all-notifications';
import { GetNotificationById } from '@/modules/notification/application/use-cases/get-notification-by-id';
import { UpdateNotification } from '@/modules/notification/application/use-cases/update-notification';
import { NotificationPrismaRepository } from '@/modules/notification/infrastructure/prisma/notification.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.translator';

export const makeNotificationModule = () => {
	const notificationRepo = new NotificationPrismaRepository(prisma, globalErrorMapper);
	return {
		GetAllNotificationsUseCase: new GetAllNotifications(notificationRepo),
		GetNotificationByIdUseCase: new GetNotificationById(notificationRepo),
		CreateNotificationUseCase: new CreateNotification(notificationRepo, IdGeneratorContainer),
		UpdateNotificationUseCase: new UpdateNotification(notificationRepo),
	};
};
