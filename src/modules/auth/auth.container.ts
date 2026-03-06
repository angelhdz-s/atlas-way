import { GetCurrentSession } from '@/modules/auth/application/use-cases/get-current-session';
import type { IAuthRepository } from './domain/auth.respository';

type Props = {
  authRepository: IAuthRepository;
};

export const makeAuthModule = ({ authRepository }: Props) => {
  return {
    GetCurrentSessionUseCase: new GetCurrentSession(authRepository),
  };
};
