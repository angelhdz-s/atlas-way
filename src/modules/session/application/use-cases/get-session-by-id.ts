import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '../../domain/session.repository';
import type { SessionProps } from '../../domain/session.types';

export class GetSessionById implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute(id: SessionProps['id']) {
    return await this.repository.findById(id);
  }
}
