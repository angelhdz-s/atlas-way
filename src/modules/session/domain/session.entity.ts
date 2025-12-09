import { NewSessionProps, SessionProps, UpdateSessionProps } from './session.schema';

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
}

export class NewSession {
	constructor(private data: NewSessionProps) {}

	get id() {
		return this.data.id;
	}

	get name() {
		return this.data.name;
	}

	get description() {
		return this.data.description;
	}

	get userId() {
		return this.data.userId;
	}
}

export class UpdateSession {
	constructor(private data: UpdateSessionProps) {}

	get name() {
		return this.data.name;
	}

	get description() {
		return this.data.description;
	}
}
