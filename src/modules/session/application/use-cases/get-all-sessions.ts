import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';

export class GetAllSessions implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
