import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';
import type { SessionProps } from '@/modules/session/domain/session.types';

export class GetSessionsByIds implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute(ids: SessionProps['id'][]) {
    return await this.repository.findByIds(ids);
  }
}
