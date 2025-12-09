import { Exercise, NewExercise, UpdateExercise } from './exercise.entity';

export interface IExerciseRepository {
	create: (data: NewExercise) => Promise<Exercise>;
	update: (id: string, data: UpdateExercise) => Promise<Exercise>;
	findAll: () => Promise<Exercise[]>;
	findById: (id: string) => Promise<Exercise | null>;
}
