import { Failure, Success } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { UseCase } from '@/shared/application/use-case';

export class Logout implements UseCase {
  constructor(readonly authRepository: IAuthRepository) {}
  async execute() {
    const sessionResult = await this.authRepository.getSession();
    if (!sessionResult.success) return sessionResult;
    if (!sessionResult.data) {
      return Failure(new SessionNotFoundError());
    }
    return Success(null);
  }
}
