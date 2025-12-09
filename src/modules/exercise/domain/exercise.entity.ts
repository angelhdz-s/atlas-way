import { ExerciseProps, NewExerciseProps, UpdateExerciseProps } from './exercise.schema';

export class Exercise {
	constructor(private data: ExerciseProps) {}

	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get description() {
		return this.data.description;
	}
	get createdAt() {
		return this.data.createdAt;
	}
	get updatedAt() {
		return this.data.updatedAt;
	}

	get userId() {
		return this.data.userId;
	}
}

export class NewExercise {
	constructor(private data: NewExerciseProps) {}

	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get description() {
		return this.data.description;
	}

	get userId() {
		return this.data.userId;
	}
}

export class UpdateExercise {
	constructor(private data: UpdateExerciseProps) {}

	get name() {
		return this.data.name;
	}
	get description() {
		return this.data.description;
	}
}
