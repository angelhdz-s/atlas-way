import { UseCase } from '@/shared/application/use-case';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';
import { UUIDGenerator } from '@/shared/infrastructure/generators/uuid-generator';
import { User } from '@/modules/user/domain/user.entity';
import { Success } from '@/shared/domain/result';

export class CreateIfNotExistsUser implements UseCase {
	constructor(
		private repository: IUserRepository,
		private generator: UUIDGenerator
	) {}
	async execute(data: CreateUserInput) {
		const userResult = await this.repository.findByEmail(data.email);
		if (userResult.success && userResult.data) return Success(userResult.data);

		const id = this.generator.generate();
		const newUser = User.create(id, {
			name: data.name,
			email: data.email,
			roleId: data.roleId,
		});
		return await this.repository.create(newUser);
	}
}
