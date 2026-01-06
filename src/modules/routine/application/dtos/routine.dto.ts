import { RoutineProps } from '../../domain/routine.types';

export type RoutineDTO = Pick<
	RoutineProps,
	'id' | 'name' | 'description' | 'active' | 'days' | 'initialDate' | 'createdAt'
>;
