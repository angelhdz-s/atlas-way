import { RoutineCycleTypeProps } from '@/modules/routinecycle/domain/routinecycle.types';
import { UserProps } from '@/modules/user/domain/user.types';

export type RoutineProps = {
	readonly id: string;
	name: string;
	description: string | null;
	active: boolean;
	days: number;
	initialDate: Date;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly userId: UserProps['id'];
	readonly routineCycleId: RoutineCycleTypeProps['id'];
};
