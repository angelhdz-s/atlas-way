'use server';

import { GetCurrentUserUseCase } from '@/modules/user/application/get-current-user.usecase';
import { GetUserByEmailUseCase } from '@/modules/user/application/get-user-by-email.usecase';
import { User } from '@/modules/user/domain/user.entity';
import { UserPrismaRepository } from '@/modules/user/infrastructure/user.prisma.repository';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
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

export async function getUserIdByEmail(email: User['email']): ActionResponse<User['id'] | null> {
	const response: ActionResponseProps<User['id'] | null> = {
		success: false,
		message: '',
		data: null,
	};

	const repo = new UserPrismaRepository();
	const usecase = new GetUserByEmailUseCase(repo);
	const user = await usecase.execute(email);

	if (!user) {
		response.message = 'User not found';
		return response;
	}

	return {
		success: true,
		message: 'User found successfully',
		data: user.id,
	};
}
