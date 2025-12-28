import { ExerciseInitialStatsProps } from '../../domain/exerciseinitialstats.types';

export type CreateExerciseInitialStatsInput = Omit<
	ExerciseInitialStatsProps,
	'id' | 'createdAt' | 'updatedAt'
>;
