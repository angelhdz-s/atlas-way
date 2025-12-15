import { MuscularGroup } from '@/modules/musculargroup/domain/musculargroup.entity';
import { BodySectionProps } from './bodysection.schema';

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

export class BodySectionWithMuscularGroups {
	constructor(
		private data: BodySectionProps,
		private muscularGroupsData: MuscularGroup[]
	) {}
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
	get muscularGroups() {
		return this.muscularGroupsData;
	}
}
