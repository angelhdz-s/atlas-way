import { IAuthRepository } from '../../domain/auth.respository';
import { getCurrentSession } from './next-auth.currentsession';
import { Failure, Success } from '@/shared/domain/result';
import { AutenticationServiceUnavailable } from '../../domain/errors/auth.errors';
import { AuthMapper } from '../auth.mapper';

export class NextAuthRepository implements IAuthRepository {
	async getSession() {
		try {
			const session = await getCurrentSession();
			if (!session?.user) return Success(null);
			const domainSession = AuthMapper.toDomain(session);
			return Success(domainSession);
		} catch {
			return Failure(
				new AutenticationServiceUnavailable('Autentication service unavailable')
			);
		}
	}
}
