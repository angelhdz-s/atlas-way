import { Failure, Success } from '@/shared/domain/result';
import { UserNotFoundError } from '@/modules/user/domain/errors/user.errors';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';
import type { UseCase } from '@/shared/application/shared.use-case';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';

export class GetCurrentUser implements UseCase {
  constructor(
    private repository: IUserRepository,
    private authRepo: IAuthRepository
  ) {}

  async execute() {
    const sessionResult = await this.authRepo.getSession();
    if (!sessionResult.success) return sessionResult;
    if (!sessionResult.data) return Failure(new SessionNotFoundError());

    const { email } = sessionResult.data;
    const userResult = await this.repository.findByEmail(email);
    if (!userResult.success) return userResult;
    if (!userResult.data) return Failure(new UserNotFoundError());

    return Success(userResult.data);
  }
}
