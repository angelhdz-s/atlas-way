import { MuscleProps } from './muscle.types';

export class Muscle {
	constructor(private data: MuscleProps) {}
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
	get muscularGroupId() {
		return this.data.muscularGroupId;
	}
	changeName(name: MuscleProps['name']) {
		this.data.name = name;
	}
	changeDescription(description: MuscleProps['name']) {
		this.data.description = description;
	}

	static create(
		id: MuscleProps['id'],
		data: Omit<MuscleProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new Muscle({ ...data, id, createdAt: new Date(), updatedAt: new Date() });
	}
}
