import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';

export class GetSessionById implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute(id: SessionProps['id']) {
    return await this.repository.findById(id);
  }
}
