import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export type UpdateExerciseInput = {
	name?: ExerciseProps['name'];
	description?: ExerciseProps['description'];
};
