import { getCurrentSession } from '@/shared/infrastructure/next-auth/next-auth.currentsession';
import { Failure, Success } from '@/shared/domain/result';
import { AuthMapper } from '@/modules/auth/infrastructure/auth.mapper';
import { logout as nextLogout } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export class AuthNextAuthRepository implements IAuthRepository {
  constructor(private errorMapper: InfrastructureErrorTranslator) {}
  async getSession() {
    try {
      const session = await getCurrentSession();
      if (!session?.user) return Success(null);
      const domainSession = AuthMapper.toDomain(session);
      return Success(domainSession);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }

  async logout() {
    try {
      await nextLogout();
      return Success(null);
    } catch (e) {
      return Failure(this.errorMapper.translate(e));
    }
  }
}
