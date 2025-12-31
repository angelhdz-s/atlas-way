import { SessionProps } from './session.types';

export class Session {
	constructor(private data: SessionProps) {}

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
	changeName(name: SessionProps['name']) {
		this.data.name = name;
	}
	changeDescription(description: SessionProps['description']) {
		this.data.description = description;
	}
	static create(
		id: SessionProps['id'],
		data: Omit<SessionProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new Session({
			...data,
			id,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	}
}
