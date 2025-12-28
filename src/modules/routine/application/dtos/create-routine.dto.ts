import { RoutineProps } from '../../domain/routine.types';

export type CreateRoutineInput = Pick<
	RoutineProps,
	'name' | 'description' | 'active' | 'initialDate' | 'days' | 'userId' | 'routineCycleId'
>;
