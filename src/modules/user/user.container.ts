import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateUser } from './application/usecases/create-user';
import { GetAllUsers } from './application/usecases/get-all-users';
import { GetUserByEmail } from './application/usecases/get-user-by-email';
import { GetUserById } from './application/usecases/get-user-by-id';
import { UpdateUser } from './application/usecases/update-user';
import { CreateIfNotExistsUser } from './application/usecases/create-if-not-exists-user';
import { GetCurrentUser } from './application/usecases/get-current-user';
import { GetCurrentUserId } from './application/usecases/get-current-user-id';
import { UserPrismaRepository } from './infrastructure/prisma/user.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { GlobalErrorMapper } from '@/shared/infrastructure/globalError.mapper';
import { errorHandlersContainer } from '@/shared/infrastructure/errors/errorHandler.container';
import { NextAuthRepository } from '../auth/infrastructure/next-auth/next-auth.repository';

export const makeUserModule = () => {
	const errorMapper = new GlobalErrorMapper(errorHandlersContainer);
	const userRepo = new UserPrismaRepository(prisma, errorMapper);
	const authRepo = new NextAuthRepository(errorMapper);
	return {
		CreateUserUseCase: new CreateUser(userRepo, IdGeneratorContainer),
		UpdateUserUseCase: new UpdateUser(userRepo),
		CreateIfNotExistsUserUseCase: new CreateIfNotExistsUser(userRepo, IdGeneratorContainer),
		GetAllUsersUseCase: new GetAllUsers(userRepo),
		GetUserByIdUseCase: new GetUserById(userRepo),
		GetUserByeEmailUseCase: new GetUserByEmail(userRepo),
		GetCurrentUserUseCase: new GetCurrentUser(userRepo, authRepo),
		GetCurrentUserIdUseCase: new GetCurrentUserId(userRepo, authRepo),
	};
};
