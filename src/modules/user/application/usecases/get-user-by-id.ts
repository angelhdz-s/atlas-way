import { UseCase } from '@/shared/application/usecase';
import { IUserRepository } from '@/modules/user/domain/user.repository';

export class GetUserById implements UseCase {
	constructor(private repository: IUserRepository) {}

	async execute(id: string) {
		return await this.repository.findById(id);
	}
}
