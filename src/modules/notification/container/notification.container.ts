import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateNotification } from '../application/usecases/create-notification';
import { GetAllNotifications } from '../application/usecases/get-all-notifications';
import { GetNotificationById } from '../application/usecases/get-notification-by-id';
import { UpdateNotification } from '../application/usecases/update-notification';
import { NotificationPrismaRepository } from '../infrastructure/prisma/notification.prisma.repository';

export const notificationRepo = new NotificationPrismaRepository();

const GetAllNotificationsUseCase = new GetAllNotifications(notificationRepo);
const GetNotificationByIdUseCase = new GetNotificationById(notificationRepo);
const CreateNotificationUseCase = new CreateNotification(notificationRepo, IdGeneratorContainer);
const UpdateNotificationUseCase = new UpdateNotification(notificationRepo);

export const NotificationContainer = {
	GetAllNotificationsUseCase,
	GetNotificationByIdUseCase,
	CreateNotificationUseCase,
	UpdateNotificationUseCase,
};
