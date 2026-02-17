import { CreateUser } from './application/use-cases/create-user';
import { GetAllUsers } from './application/use-cases/get-all-users';
import { GetUserByEmail } from './application/use-cases/get-user-by-email';
import { GetUserById } from './application/use-cases/get-user-by-id';
import { UpdateUser } from './application/use-cases/update-user';
import { CreateIfNotExistsUser } from './application/use-cases/create-if-not-exists-user';
import { GetCurrentUser } from './application/use-cases/get-current-user';
import { GetCurrentUserId } from './application/use-cases/get-current-user-id';
import { IUserRepository } from './domain/user.repository';
import { IAuthRepository } from '../auth/domain/auth.respository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	userRepository: IUserRepository;
	authRepository: IAuthRepository;
	idGeneratorRepository: IdGeneratorRepository;
};

export const makeUserModule = ({
	authRepository,
	idGeneratorRepository,
	userRepository,
}: Props) => {
	return {
		CreateUserUseCase: new CreateUser(userRepository, idGeneratorRepository),
		UpdateUserUseCase: new UpdateUser(userRepository),
		CreateIfNotExistsUserUseCase: new CreateIfNotExistsUser(
			userRepository,
			idGeneratorRepository
		),
		GetAllUsersUseCase: new GetAllUsers(userRepository),
		GetUserByIdUseCase: new GetUserById(userRepository),
		GetUserByeEmailUseCase: new GetUserByEmail(userRepository),
		GetCurrentUserUseCase: new GetCurrentUser(userRepository, authRepository),
		GetCurrentUserIdUseCase: new GetCurrentUserId(userRepository, authRepository),
	};
};
