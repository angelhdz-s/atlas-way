import { MuscularGroupProps } from '@/modules/musculargroup/domain/musculargroup.schema';
import { UserProps } from '@/modules/user/domain/user.types';

export type MuscleProps = {
	readonly id: number;
	name: string;
	description: string | null;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly userId: UserProps['id'];
	readonly muscularGroupId: MuscularGroupProps['id'];
};
