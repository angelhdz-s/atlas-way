import { RoutineDaysProps } from './routinedays.types';

export class RoutineDays {
	constructor(private data: RoutineDaysProps) {}

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

	changeName(name: RoutineDaysProps['name']) {
		this.data.name = name;
	}
	changeDayNumber(dayNumber: RoutineDaysProps['dayNumber']) {
		this.data.dayNumber = dayNumber;
	}

	static create(
		id: RoutineDaysProps['id'],
		data: Omit<RoutineDaysProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new RoutineDays({
			...data,
			id,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	}
}
