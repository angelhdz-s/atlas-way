import { UserProps } from './user.types';

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
	get roleId() {
		return this.props.roleId;
	}
	changeName(name: UserProps['name']) {
		this.props.name = name;
	}
	changeEmail(email: UserProps['email']) {
		this.props.email = email;
	}
	static create(id: UserProps['id'], data: Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>) {
		return new User({ ...data, createdAt: new Date(), updatedAt: new Date(), id });
	}
}
