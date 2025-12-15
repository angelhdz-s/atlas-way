import {
	ExerciseInitialStats,
	NewExerciseInitialStats,
	UpdateExerciseInitialStats,
} from './exerciseinitialstats.entity';

export interface IExerciseInitialStats {
	create: (data: NewExerciseInitialStats) => Promise<ExerciseInitialStats>;
	update: (
		id: ExerciseInitialStats['id'],
		data: UpdateExerciseInitialStats
	) => Promise<ExerciseInitialStats>;
	findAll: () => Promise<ExerciseInitialStats[]>;
	findById: (id: ExerciseInitialStats['id']) => Promise<ExerciseInitialStats | null>;
	findByExerciseId: (
		exerciseId: ExerciseInitialStats['exerciseId']
	) => Promise<ExerciseInitialStats | null>;
}
