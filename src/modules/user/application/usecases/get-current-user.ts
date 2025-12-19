import { UseCase } from '@/shared/application/usecase';
import { IUserRepository } from '@/modules/user/domain/user.repository';

export class GetCurrentUser implements UseCase {
	constructor(private repository: IUserRepository) {}

	async execute() {
		return await this.repository.currentUser();
	}
}
