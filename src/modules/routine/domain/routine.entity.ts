import { NewRoutineProps, RoutineProps, UpdateRoutineProps } from './routine.schema';

export class Routine {
	constructor(private data: RoutineProps) {}

	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get description() {
		return this.data.description;
	}
	get days() {
		return this.data.days;
	}
	get active() {
		return this.data.active;
	}
	get initialDate() {
		return this.data.initialDate;
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
	get routineCycleId() {
		return this.data.routineCycleId;
	}
}

export class NewRoutine {
	constructor(private data: NewRoutineProps) {}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
	}

	get description() {
		return this.data.description;
	}

	get days() {
		return this.data.days;
	}

	get active() {
		return this.data.active;
	}

	get initialDate() {
		return this.data.initialDate;
	}

	get userId() {
		return this.data.userId;
	}

	get routineCycleId() {
		return this.data.routineCycleId;
	}
}

export class UpdateRoutine {
	constructor(private data: UpdateRoutineProps) {}

	get name() {
		return this.data.name;
	}

	get description() {
		return this.data.description;
	}

	get days() {
		return this.data.days;
	}

	get active() {
		return this.data.active;
	}

	get initialDate() {
		return this.data.initialDate;
	}
}
