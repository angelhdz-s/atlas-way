import { IUserRepository } from '../domain/user.repository';

export class GetAllUsersUseCase {
	constructor(private repository: IUserRepository) {}

	async execute() {
		return await this.repository.findAll();
	}
}
