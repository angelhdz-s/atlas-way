import { GetCurrentSession } from '@/modules/auth/application/use-cases/get-current-session';
import { AuthNextAuthRepository } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.repository';
import { errorHandlersContainer } from '@/shared/infrastructure/errors/error.translator';
import { InfrastructureErrorTranslator } from '@/shared/infrastructure/errors/error.translator';

export const makeAuthModule = () => {
	const errorMapper = new InfrastructureErrorTranslator(errorHandlersContainer);
	const authRepo = new AuthNextAuthRepository(errorMapper);
	return {
		GetCurrentSessionUseCase: new GetCurrentSession(authRepo),
	};
};
