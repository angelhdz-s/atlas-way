import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError } from '@/modules/auth/domain/errors/auth.errors';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { UseCase } from '@/shared/application/use-case';

export class Logout implements UseCase {
  constructor(readonly authRepository: IAuthRepository) {}
  async execute() {
    const session = await this.authRepository.getSession();
    if (!session.success) return session;
    if (!session.data) {
      return Failure(new SessionNotFoundError());
    }
    return await this.authRepository.logout();
  }
}
