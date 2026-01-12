import { SessionToExerciseProps } from './session-to-exercise.types';

export class SessionToExercise {
	constructor(private data: SessionToExerciseProps) {}

	get sessionId() {
		return this.data.sessionId;
	}
	get exerciseId() {
		return this.data.exerciseId;
	}
	get createdAt() {
		return this.data.createdAt;
	}

	static create(data: Omit<SessionToExerciseProps, 'createdAt'>) {
		return new SessionToExercise({
			...data,
			createdAt: new Date(),
		});
	}
}
