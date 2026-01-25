import { GetCurrentSession } from '@/modules/auth/application/use-cases/get-current-session';
import { NextAuthRepository } from '@/modules/auth/infrastructure/next-auth/next-auth.repository';
import { errorHandlersContainer } from '@/shared/infrastructure/errors/error.translator';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export const makeAuthModule = () => {
	const errorMapper = new InfrastructureErrorTranslator(errorHandlersContainer);
	const authRepo = new NextAuthRepository(errorMapper);
	return {
		GetCurrentSessionUseCase: new GetCurrentSession(authRepo),
	};
};
