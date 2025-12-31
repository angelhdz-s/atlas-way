import { RoutineDaysProps } from '../../domain/routinedays.types';

export type UpdateProps = Pick<RoutineDaysProps, 'name' | 'dayNumber'>;
export type UpdateRoutineDaysInput = {
	[K in keyof UpdateProps]?: UpdateProps[K];
};
