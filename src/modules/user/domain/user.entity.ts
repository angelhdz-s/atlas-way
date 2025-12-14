import { NewUserProps, UpdateUserProps, UserProps } from './user.schema';

export class User {
	constructor(private props: UserProps) {}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get email() {
		return this.props.email;
	}

	get createdAt() {
		return this.props.createdAt;
	}

	get updatedAt() {
		return this.props.updatedAt;
	}
}
export class NewUser {
	constructor(private props: NewUserProps) {}

	get name() {
		return this.props.name;
	}

	get email() {
		return this.props.email;
	}
}

export class UpdateUser {
	constructor(private props: UpdateUserProps) {}

	get name() {
		return this.props.name;
	}

	get email() {
		return this.props.email;
	}
}
