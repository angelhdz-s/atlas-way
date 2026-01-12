import { ExerciseProps } from '../../domain/exercise.types';

export type ExerciseDTO = Pick<ExerciseProps, 'id' | 'name' | 'description' | 'createdAt'>;
