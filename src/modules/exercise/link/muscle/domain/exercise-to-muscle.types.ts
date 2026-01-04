import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { MuscleProps } from '@/modules/muscle/domain/muscle.types';
export type ExerciseToMuscleProps = {
	exerciseId: ExerciseProps['id'];
	muscleId: MuscleProps['id'];
	createdAt: Date;
};
