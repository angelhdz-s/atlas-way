import { IUserRepository } from '@/modules/user/domain/user.repository';
import { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';
import { UUIDGenerator } from '@/shared/infrastructure/generators/uuid-generator';
import { User } from '@/modules/user/domain/user.entity';
import { UseCase } from '@/shared/application/use-case';

export class CreateUser implements UseCase {
	constructor(
		private repository: IUserRepository,
		private generator: UUIDGenerator
	) {}

	async execute(data: CreateUserInput) {
		const id = this.generator.generate();

		const user = User.create(id, {
			email: data.email,
			name: data.name,
			roleId: data.roleId,
		});

		return await this.repository.create(user);
	}
}
