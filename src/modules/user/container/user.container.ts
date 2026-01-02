import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateUser } from '../application/usecases/create-user';
import { GetAllUsers } from '../application/usecases/get-all-users';
import { GetUserByEmail } from '../application/usecases/get-user-by-email';
import { GetUserById } from '../application/usecases/get-user-by-id';
import { UpdateUser } from '../application/usecases/update-user';
import { CreateIfNotExistsUser } from '../application/usecases/create-if-not-exists-user';
import { GetCurrentUser } from '../application/usecases/get-current-user';
import { GetCurrentUserId } from '../application/usecases/get-current-user-id';
import { userRepo } from '../infrastructure/user.config';
import { authRepo } from '@/modules/auth/container/auth.container';

const CreateIfNotExistsUserUseCase = new CreateIfNotExistsUser(userRepo, IdGeneratorContainer);
const CreateUserUseCase = new CreateUser(userRepo, IdGeneratorContainer);
const UpdateUserUseCase = new UpdateUser(userRepo);
const GetAllUsersUseCase = new GetAllUsers(userRepo);
const GetUserByIdUseCase = new GetUserById(userRepo);
const GetUserByeEmailUseCase = new GetUserByEmail(userRepo);
const GetCurrentUserUseCase = new GetCurrentUser(userRepo, authRepo);
const GetCurrentUserIdUseCase = new GetCurrentUserId(userRepo, authRepo);

export const UserContainer = {
	CreateUserUseCase,
	UpdateUserUseCase,
	CreateIfNotExistsUserUseCase,
	GetAllUsersUseCase,
	GetUserByIdUseCase,
	GetUserByeEmailUseCase,
	GetCurrentUserUseCase,
	GetCurrentUserIdUseCase,
};
