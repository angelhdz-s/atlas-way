import { ExerciseProps } from '@/modules/exercise/domain/exercise.types';
import { ExerciseInitialStatsProps } from './exercise-initial-stats.types';

export class ExerciseInitialStats {
	constructor(private data: ExerciseInitialStatsProps) {}
	get id() {
		return this.data.id;
	}
	get sets() {
		return this.data.sets;
	}
	get reps() {
		return this.data.reps;
	}
	get weight() {
		return this.data.weight;
	}
	get createdAt() {
		return this.data.createdAt;
	}
	get updatedAt() {
		return this.data.updatedAt;
	}
	get exerciseId() {
		return this.data.exerciseId;
	}

	changeSets(sets: ExerciseInitialStatsProps['sets']) {
		return (this.data.sets = sets);
	}
	changeReps(reps: ExerciseInitialStatsProps['reps']) {
		this.data.reps = reps;
	}

	changeWeight(weight: ExerciseInitialStatsProps['weight']) {
		this.data.weight = weight;
	}

	static create(
		id: ExerciseInitialStatsProps['id'],
		data: Omit<ExerciseInitialStatsProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new ExerciseInitialStats({
			...data,
			createdAt: new Date(),
			updatedAt: new Date(),
			id,
		});
	}
}
