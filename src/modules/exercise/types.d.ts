import { Excercises, Muscles } from '@/prisma/client';
import { Prettify } from '../globals/types';

export type ExerciseFormData = Omit<Excercises, 'id' | 'createdAt' | 'updatedAt' | 'userId'>;

export type ExerciseFormDataWithMuscles = Prettify<
	ExerciseFormData & {
		muscles: Muscles['id'][];
	}
>;
