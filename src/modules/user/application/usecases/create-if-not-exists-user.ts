import { UseCase } from '@/shared/application/usecase';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { CreateUserInput } from '@/modules/user/application/dtos/create-user.dto';
import { UUIDGenerator } from '@/shared/infrastructure/uuid-generator';
import { User } from '@/modules/user/domain/user.entity';
import { Success } from '@/shared/domain/result';

export class CreateIfNotExistsUser implements UseCase {
	constructor(
		private repository: IUserRepository,
		private generator: UUIDGenerator
	) {}
	async execute(data: CreateUserInput) {
		const result = await this.repository.findByEmail(data.email);
		if (result.success && result.data) {
			return Success(result.data);
		}

		const id = this.generator.generate();
		const user = User.create(id, {
			name: data.name,
			email: data.email,
			roleId: data.roleId,
		});
		return await this.repository.create(user);
	}
}
