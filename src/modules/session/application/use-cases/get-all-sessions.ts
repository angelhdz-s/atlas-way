import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '../../domain/session.repository';

export class GetAllSessions implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute() {
    return await this.repository.findAll();
  }
}
