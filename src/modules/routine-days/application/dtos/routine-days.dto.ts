import { RoutineDaysProps } from '../../domain/routine-days.types';

export type RoutineDaysDTO = Pick<RoutineDaysProps, 'id' | 'name' | 'dayNumber'>;
