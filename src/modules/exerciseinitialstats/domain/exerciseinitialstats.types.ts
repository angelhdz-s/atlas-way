import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';

export type ExerciseInitialStatsProps = {
	readonly id: string;
	sets: number;
	reps: number;
	weight: number;
	readonly createdAt: Date;
	readonly updatedAt: Date;
	readonly exerciseId: ExerciseProps['id'];
};
