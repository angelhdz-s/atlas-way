import { NewRoutineDay, RoutineDay, UpdateRoutineDay } from './routineday.entity';
import { RoutineDayProps } from './routineday.schema';

export interface IRoutineDayRepository {
	create: (data: NewRoutineDay) => Promise<RoutineDay>;
	update: (id: RoutineDayProps['id'], data: UpdateRoutineDay) => Promise<RoutineDay>;
	findAll: () => Promise<RoutineDay[]>;
	findById: (id: RoutineDayProps['id']) => Promise<RoutineDay | null>;
}
