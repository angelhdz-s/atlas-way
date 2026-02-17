import { IAuthRepository } from '../../domain/auth.respository';
import { getCurrentSession } from '../../../../shared/infrastructure/nextauth/next-auth.currentsession';
import { Failure, Success } from '@/shared/domain/result';
import { AuthMapper } from '../auth.mapper';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

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
}
