import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '../../domain/session.repository';
import type { SessionProps } from '../../domain/session.types';

export class GetSessionsByIds implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute(ids: SessionProps['id'][]) {
    return await this.repository.findByIds(ids);
  }
}
