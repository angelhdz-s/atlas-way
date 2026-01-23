import { GetCurrentSession } from '@/modules/auth/application/usecases/get-current-session';
import { NextAuthRepository } from '@/modules/auth/infrastructure/next-auth/next-auth.repository';
import { errorHandlersContainer } from '@/shared/infrastructure/errors/error-handler.container';
import { GlobalErrorMapper } from '@/shared/infrastructure/error.mapper';

export const makeAuthModule = () => {
	const errorMapper = new GlobalErrorMapper(errorHandlersContainer);
	const authRepo = new NextAuthRepository(errorMapper);
	return {
		GetCurrentSessionUseCase: new GetCurrentSession(authRepo),
	};
};
