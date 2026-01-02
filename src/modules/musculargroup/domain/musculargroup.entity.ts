import { MuscularGroupProps } from './musculargroup.types';

export class MuscularGroup {
	constructor(private data: MuscularGroupProps) {}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
	}

	get createdAt() {
		return this.data.createdAt;
	}

	get updatedAt() {
		return this.data.updatedAt;
	}

	get bodySectionId() {
		return this.data.bodySectionId;
	}
}
