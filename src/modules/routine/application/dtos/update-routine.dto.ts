import { RoutineProps } from '../../domain/routine.types';

type updateProps = Pick<RoutineProps, 'name' | 'description' | 'active' | 'days' | 'initialDate'>;
export type UpdateRoutineInput = {
	[K in keyof updateProps]?: RoutineProps[K];
};
