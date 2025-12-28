import { GetCurrentSession } from '../application/usecases/get-current-session';
import { NextAuthRepository } from '../infrastructure/next-auth/next-auth.repository';

export const authRepo = new NextAuthRepository();

const GetCurrentSessionUseCase = new GetCurrentSession(authRepo);
export const AuthContainer = {
	GetCurrentSessionUseCase,
};
