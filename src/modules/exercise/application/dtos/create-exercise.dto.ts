import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export type NewExerciseInput = Pick<ExerciseProps, 'name' | 'description' | 'userId'>;
