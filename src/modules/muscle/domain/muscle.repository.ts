import { Muscle, NewMuscle, UpdateMuscle } from './muscle.entity';

export interface IMuscleRepository {
	create: (data: NewMuscle) => Promise<Muscle>;
	update: (id: number, data: UpdateMuscle) => Promise<Muscle>;
	findAll: () => Promise<Muscle[]>;
	findById: (id: number) => Promise<Muscle | null>;
}
