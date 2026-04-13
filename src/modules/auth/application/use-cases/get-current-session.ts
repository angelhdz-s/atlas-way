import type { UseCase } from '@/shared/application/use-case';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';

export class GetCurrentSession implements UseCase {
  constructor(private repository: IAuthRepository) {}
  async execute() {
    return this.repository.getSession();
  }
}
