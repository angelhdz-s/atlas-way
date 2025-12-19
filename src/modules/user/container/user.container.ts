import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateUser } from '../application/usecases/create-user';
import { GetAllUsers } from '../application/usecases/get-all-users';
import { GetUserByEmail } from '../application/usecases/get-user-by-email';
import { GetUserById } from '../application/usecases/get-user-by-id';
import { UserPrismaRepository } from '../infrastructure/user.prisma.repository';
import { UpdateUser } from '../application/usecases/update-user';
import { CreateIfNotExistsUser } from '../application/usecases/create-if-not-exists-user';

const UserDependencyRepository = new UserPrismaRepository();

const CreateIfNotExistsUserUseCase = new CreateIfNotExistsUser(
	UserDependencyRepository,
	IdGeneratorContainer
);
const CreateUserUseCase = new CreateUser(UserDependencyRepository, IdGeneratorContainer);
const UpdateUserUseCase = new UpdateUser(UserDependencyRepository);
const GetAllUsersUseCase = new GetAllUsers(UserDependencyRepository);
const GetUserByIdUseCase = new GetUserById(UserDependencyRepository);
const GetUserByeEmailUseCase = new GetUserByEmail(UserDependencyRepository);

export const UserContainer = {
	CreateUserUseCase,
	UpdateUserUseCase,
	CreateIfNotExistsUserUseCase,
	GetAllUsersUseCase,
	GetUserByIdUseCase,
	GetUserByeEmailUseCase,
};
