import { ExerciseProps } from '../../domain/exercise.types';

export type ExerciseDTO = Pick<ExerciseProps, 'name' | 'description' | 'createdAt'>;
