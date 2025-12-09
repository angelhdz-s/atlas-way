'use server';

import { GetCurrentUserUseCase } from '@/modules/user/application/get-current-user.usecase';
import { UserActionResponse } from '@/modules/user/contracts/user.action.types';
import { UserPrismaRepository } from '@/modules/user/infrastructure/user.prisma.repository';
export async function getUser(): UserActionResponse {
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
