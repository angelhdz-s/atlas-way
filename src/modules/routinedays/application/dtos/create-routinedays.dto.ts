import { RoutineDaysProps } from '../../domain/routinedays.types';

export type CreateRoutineDaysInput = Pick<
	RoutineDaysProps,
	'name' | 'dayNumber' | 'routineId' | 'sessionId'
>;
