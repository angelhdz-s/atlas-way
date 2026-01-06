import { ExerciseInitialStatsProps } from '../../domain/exerciseinitialstats.types';

export type ExerciseInitialStatsDTO = Pick<ExerciseInitialStatsProps, 'reps' | 'sets' | 'weight'>;
