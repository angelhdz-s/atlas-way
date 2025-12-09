import { NewRoutine, Routine, UpdateRoutine } from './routine.entity';

export interface IRoutineRepository {
	create: (data: NewRoutine) => Promise<Routine>;
	update: (id: string, data: UpdateRoutine) => Promise<Routine>;
	findaAll: () => Promise<Routine[]>;
	findById: (id: string) => Promise<Routine | null>;
}
