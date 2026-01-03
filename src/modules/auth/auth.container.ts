import { GetCurrentSession } from '@/modules/auth/application/usecases/get-current-session';
import { NextAuthRepository } from '@/modules/auth/infrastructure/next-auth/next-auth.repository';

export const authRepo = new NextAuthRepository();

const GetCurrentSessionUseCase = new GetCurrentSession(authRepo);
export const AuthContainer = {
	GetCurrentSessionUseCase,
};
