import { RoutineProps } from './routine.types';

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
	changeName(name: string) {
		this.data.name = name;
	}
	changeDescription(description: string) {
		this.data.description = description;
	}
	changeActive(active: boolean) {
		this.data.active = active;
	}
	changeDays(days: number) {
		this.data.days = days;
	}
	changeInitialDate(initialDate: Date) {
		this.data.initialDate = initialDate;
	}
	static create(
		id: RoutineProps['id'],
		data: Omit<RoutineProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new Routine({ ...data, id, createdAt: new Date(), updatedAt: new Date() });
	}
}
