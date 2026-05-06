import type { UseCase } from '@/shared/application/shared.use-case';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';

export class GetCurrentSession implements UseCase {
  constructor(private repository: IAuthRepository) {}
  async execute() {
    return this.repository.getSession();
  }
}
