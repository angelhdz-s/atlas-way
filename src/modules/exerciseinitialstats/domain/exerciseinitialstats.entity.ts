import {
	ExerciseInitialStatsProps,
	NewExerciseInitialStatsProps,
	UpdateExerciseInitialStatsProps,
} from './exerciseinitialstats.schema';

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
}

export class NewExerciseInitialStats {
	constructor(private data: NewExerciseInitialStatsProps) {}
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
	get exerciseId() {
		return this.data.exerciseId;
	}
}

export class UpdateExerciseInitialStats {
	constructor(private data: UpdateExerciseInitialStatsProps) {}
	get sets() {
		return this.data.sets;
	}
	get reps() {
		return this.data.reps;
	}
	get weight() {
		return this.data.weight;
	}
}
