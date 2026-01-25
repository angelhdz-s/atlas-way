import { IdGeneratorContainer } from '@/shared/container/id-generator.container';
import { CreateUser } from './application/use-cases/create-user';
import { GetAllUsers } from './application/use-cases/get-all-users';
import { GetUserByEmail } from './application/use-cases/get-user-by-email';
import { GetUserById } from './application/use-cases/get-user-by-id';
import { UpdateUser } from './application/use-cases/update-user';
import { CreateIfNotExistsUser } from './application/use-cases/create-if-not-exists-user';
import { GetCurrentUser } from './application/use-cases/get-current-user';
import { GetCurrentUserId } from './application/use-cases/get-current-user-id';
import { UserPrismaRepository } from './infrastructure/prisma/user.prisma.repository';
import { prisma } from '@/shared/infrastructure/prisma/client';
import { NextAuthRepository } from '../auth/infrastructure/next-auth/next-auth.repository';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.translator';

export const makeUserModule = () => {
	const userRepo = new UserPrismaRepository(prisma, globalErrorMapper);
	const authRepo = new NextAuthRepository(globalErrorMapper);
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
