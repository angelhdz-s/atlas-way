import { IAuthRepository } from '../../domain/auth.respository';
import { getCurrentSession } from './next-auth.currentsession';
import { Failure, Success } from '@/shared/domain/result';
import { AuthMapper } from '../auth.mapper';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';

export class NextAuthRepository implements IAuthRepository {
	constructor(private errorMapper: GlobalErrorMapper) {}
	async getSession() {
		try {
			const session = await getCurrentSession();
			if (!session?.user) return Success(null);
			const domainSession = AuthMapper.toDomain(session);
			return Success(domainSession);
		} catch (e) {
			return Failure(this.errorMapper.handle(e));
		}
	}
}
