import { UseCase } from '@/shared/application/use-case';
import { IUserRepository } from '@/modules/user/domain/user.repository';
import { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import { Failure, Success } from '@/shared/domain/result';
import { UserNotFoundError } from '../../domain/errors/user.errors';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';

export class GetCurrentUserId implements UseCase {
	constructor(
		private repository: IUserRepository,
		private authRepo: IAuthRepository
	) {}

	async execute() {
		const session = await this.authRepo.getSession();
		if (!session.success || !session.data) return Failure(new SessionNotFoundError());
		const { email } = session.data;
		const user = await this.repository.findByEmail(email);
		if (!user.success || !user.data) return Failure(new UserNotFoundError());
		return Success(user.data.id);
	}
}
