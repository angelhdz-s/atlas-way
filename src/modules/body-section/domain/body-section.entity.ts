import { BodySectionProps } from './body-section.types';

export class BodySection {
	constructor(private data: BodySectionProps) {}

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
}
