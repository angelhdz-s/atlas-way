import { UseCase } from '@/shared/application/usecase';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { UserProps } from '@/modules/user/domain/user.types';

export class GetUserByEmail implements UseCase {
	constructor(private repository: IUserRepository) {}

	async execute(email: UserProps['email']) {
		return await this.repository.findByEmail(email);
	}
}
