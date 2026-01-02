import { NotificationProps } from './notification.types';

export class Notification {
	constructor(private data: NotificationProps) {}
	get id() {
		return this.data.id;
	}
	get name() {
		return this.data.name;
	}
	get message() {
		return this.data.message;
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

	changeName(name: NotificationProps['name']) {
		this.data.name = name;
	}
	changeMessage(message: NotificationProps['message']) {
		this.data.message = message;
	}

	static create(
		id: NotificationProps['id'],
		data: Omit<NotificationProps, 'id' | 'createdAt' | 'updatedAt'>
	) {
		return new Notification({
			...data,
			id,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	}
}
