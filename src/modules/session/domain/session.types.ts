import { UserProps } from '@/modules/user/domain/user.types';

export type SessionProps = {
	id: string;
	name: string;
	description: string | null;
	createdAt: Date;
	updatedAt: Date;
	userId: UserProps['id'];
};
