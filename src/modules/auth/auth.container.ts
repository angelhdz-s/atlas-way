import { GetCurrentSession } from '@/modules/auth/application/use-cases/get-current-session';
import { Login } from '@/modules/auth/application/use-cases/login';
import { Logout } from '@/modules/auth/application/use-cases/logout';
import type { IAuthRepository } from '@/modules/auth/domain/auth.respository';
import type { IUserRepository } from '@/modules/user/domain/user.repository';
import type { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
  authRepository: IAuthRepository;
  userRepository: IUserRepository;
  idGeneratorRepository: IdGeneratorRepository;
};

export const makeAuthModule = ({
  authRepository,
  userRepository,
  idGeneratorRepository,
}: Props) => {
  return {
    GetCurrentSessionUseCase: new GetCurrentSession(authRepository),
    LoginUseCase: new Login(authRepository, userRepository, idGeneratorRepository),
    LogoutUseCase: new Logout(authRepository),
  };
};
