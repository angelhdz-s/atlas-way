import { MuscleProps, NewMuscleProps, UpdateMuscleProps } from './muscle.schema';

export class Muscle {
	constructor(private muscle: MuscleProps) {}

	get id() {
		return this.muscle.id;
	}
	get name() {
		return this.muscle.name;
	}
	get description() {
		return this.muscle.description;
	}
	get createdAt() {
		return this.muscle.createdAt;
	}
	get updatedAt() {
		return this.muscle.updatedAt;
	}
	get userId() {
		return this.muscle.userId;
	}

	get muscleGroupId() {
		return this.muscle.muscleGroupId;
	}
}

export class NewMuscle {
	constructor(private muscle: NewMuscleProps) {}
	get id() {
		return this.muscle.id;
	}
	get name() {
		return this.muscle.name;
	}
	get description() {
		return this.muscle.description;
	}
	get userId() {
		return this.muscle.userId;
	}

	get muscleGroupId() {
		return this.muscle.muscleGroupId;
	}
}

export class UpdateMuscle {
	constructor(private muscle: UpdateMuscleProps) {}
	get name() {
		return this.muscle.name;
	}
	get description() {
		return this.muscle.description;
	}
}
