'use server';

import { GetCurrentUserUseCase } from '@/modules/user/application/get-current-user.usecase';
import { User } from '@/modules/user/domain/user.entity';
import { UserPrismaRepository } from '@/modules/user/infrastructure/user.prisma.repository';
import { ActionResponse } from '@/shared/contracts/actions.response';
export async function getUser(): ActionResponse<User | null> {
	const repo = new UserPrismaRepository();
	const currentUser = new GetCurrentUserUseCase(repo);

	const user = await currentUser.execute();

	return {
		success: user ? true : false,
		data: user,
		message: user ? `User logged found` : 'User not found',
	};
}

export async function getUserId() {
	const repo = new UserPrismaRepository();
	const currentUser = new GetCurrentUserUseCase(repo);

	const user = await currentUser.execute();

	return user ? user.id : null;
}
