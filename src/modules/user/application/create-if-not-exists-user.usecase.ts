import { NewUser } from '../domain/user.entity';
import { IUserRepository } from '../domain/user.repository';

export class CreateIfNotExistsUserUseCase {
	constructor(private repo: IUserRepository) {}
	async execute(data: NewUser) {
		return await this.repo.createIfNotExists(data);
	}
}
