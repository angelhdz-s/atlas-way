import { UserProps } from '@/modules/user/domain/user.types';

export type NotificationProps = {
	readonly id: string;
	name: string;
	message: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly userId: UserProps['id'];
};
