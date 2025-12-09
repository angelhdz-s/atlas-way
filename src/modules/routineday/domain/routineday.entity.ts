import { NewRoutineDayProps, RoutineDayProps, UpdateRoutineDayProps } from './routineday.schema';

export class RoutineDay {
	constructor(private data: RoutineDayProps) {}

	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get dayNumber() {
		return this.data.dayNumber;
	}
	get createdAt() {
		return this.data.createdAt;
	}
	get updatedAt() {
		return this.data.updatedAt;
	}
	get sessionId() {
		return this.data.sessionId;
	}
	get routineId() {
		return this.data.routineId;
	}
}

export class NewRoutineDay {
	constructor(private data: NewRoutineDayProps) {}
	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get dayNumber() {
		return this.data.dayNumber;
	}
	get sessionId() {
		return this.data.sessionId;
	}
	get routineId() {
		return this.data.routineId;
	}
}

export class UpdateRoutineDay {
	constructor(private data: UpdateRoutineDayProps) {}
	get name() {
		return this.data.name;
	}
	get dayNumber() {
		return this.data.dayNumber;
	}
}
