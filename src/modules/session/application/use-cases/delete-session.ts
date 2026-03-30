import type { UseCase } from '@/shared/application/use-case';
import type { ISessionRepository } from '../../domain/session.repository';
import type { SessionProps } from '../../domain/session.types';
import type { UserProps } from '@/modules/user/domain/user.types';
import { Failure } from '@/shared/domain/result';
import { SessionNotFoundError, SessionOwnershipError } from '../../domain/errors/session.errors';

export class DeleteSession implements UseCase {
  constructor(private repository: ISessionRepository) {}

  async execute(sessionId: SessionProps['id'], userId: UserProps['id']) {
    const sessionResult = await this.repository.findById(sessionId);
    if (!sessionResult.success) return sessionResult;
    if (sessionResult.data === null) return Failure(new SessionNotFoundError());
    if (sessionResult.data.userId !== userId) return Failure(new SessionOwnershipError());
    return await this.repository.delete(sessionId);
  }
}
