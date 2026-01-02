import { RoutineProps } from '@/modules/routine/domain/routine.types';
import { SessionProps } from '@/modules/session/domain/session.types';

export type RoutineDaysProps = {
	readonly id: string;
	name: string;
	dayNumber: number;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly routineId: RoutineProps['id'];
	readonly sessionId: SessionProps['id'] | null;
};
