import { IUserRepository } from '../domain/user.repository';

export class GetUserUseCase {
	constructor(private repository: IUserRepository) {}

	async execute(id: string) {
		return await this.repository.findById(id);
	}
}
