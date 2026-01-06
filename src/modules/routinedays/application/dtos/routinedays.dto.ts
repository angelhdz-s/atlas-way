import { RoutineDaysProps } from '../../domain/routinedays.types';

export type RoutineDaysDTO = Pick<RoutineDaysProps, 'id' | 'name' | 'dayNumber'>;
