import { UserProps } from '@/modules/user/domain/user.types';

export type ExerciseProps = {
	readonly id: string;
	name: string;
	description: string | null;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly userId: UserProps['id'];
};
