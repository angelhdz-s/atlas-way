import { ExerciseProps } from './exercise.types';

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
	changeName(name: ExerciseProps['name']) {
		return (this.data.name = name);
	}
	changeDescription(description: ExerciseProps['description']) {
		this.data.description = description;
	}

	changeId(description: ExerciseProps['description']) {
		this.data.description = description;
	}

	static create(
		id: ExerciseProps['id'],
		data: Omit<ExerciseProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new Exercise({
			...data,
			createdAt: new Date(),
			updatedAt: new Date(),
			id,
		});
	}
}
