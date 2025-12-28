import { ExerciseInitialStatsProps } from '../../domain/exerciseinitialstats.types';

export type UpdateExerciseInitialStatsInput = {
	sets?: ExerciseInitialStatsProps['sets'];
	reps?: ExerciseInitialStatsProps['reps'];
	weight?: ExerciseInitialStatsProps['weight'];
};
