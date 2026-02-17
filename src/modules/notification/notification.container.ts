import { CreateNotification } from '@/modules/notification/application/use-cases/create-notification';
import { GetAllNotifications } from '@/modules/notification/application/use-cases/get-all-notifications';
import { GetNotificationById } from '@/modules/notification/application/use-cases/get-notification-by-id';
import { UpdateNotification } from '@/modules/notification/application/use-cases/update-notification';
import { INotificationRepository } from './domain/notification.repository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	notificationRepository: INotificationRepository;
	idGeneratorRepository: IdGeneratorRepository;
};

export const makeNotificationModule = ({
	notificationRepository,
	idGeneratorRepository,
}: Props) => {
	return {
		GetAllNotificationsUseCase: new GetAllNotifications(notificationRepository),
		GetNotificationByIdUseCase: new GetNotificationById(notificationRepository),
		CreateNotificationUseCase: new CreateNotification(
			notificationRepository,
			idGeneratorRepository
		),
		UpdateNotificationUseCase: new UpdateNotification(notificationRepository),
	};
};
