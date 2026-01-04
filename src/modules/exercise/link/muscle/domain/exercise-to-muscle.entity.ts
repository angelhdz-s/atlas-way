import { ExerciseToMuscleProps } from './exercise-to-muscle.types';

export class ExerciseToMuscle {
	constructor(private data: ExerciseToMuscleProps) {}
	get exerciseId() {
		return this.data.exerciseId;
	}
	get muscleId() {
		return this.data.muscleId;
	}
	get createdAt() {
		return this.data.createdAt;
	}

	static create(data: Omit<ExerciseToMuscleProps, 'createdAt'>) {
		return new ExerciseToMuscle({
			...data,
			createdAt: new Date(),
		});
	}
}
