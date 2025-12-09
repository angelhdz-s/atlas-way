import { IUserRepository } from '../domain/user.repository';

export class GetUserByEmailUseCase {
	constructor(private repository: IUserRepository) {}

	async execute(email: string) {
		return await this.repository.findByEmail(email);
	}
}
