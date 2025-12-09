import { IUserRepository } from '../domain/user.repository';

export class GetCurrentUserUseCase {
	constructor(private repository: IUserRepository) {}

	async execute() {
		return await this.repository.currentUser();
	}
}
