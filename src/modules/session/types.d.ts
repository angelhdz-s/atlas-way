import { Sessions } from '@/prisma/client';
import { ExerciseFormDataWithMuscles } from '../exercise/types';
import { Prettify } from '../globals/types';

export type SessionsFormData = Omit<Sessions, 'id' | 'createdAt' | 'updatedAt' | 'userId'>;

export type SessionsFormDataWithExercises = Prettify<
	SessionsFormData & {
		exercises: ExerciseFormDataWithMuscles[];
	}
>;
