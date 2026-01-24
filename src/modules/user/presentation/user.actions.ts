'use server';
import { User } from '@/modules/user/domain/user.entity';
import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { UserProps } from '../domain/user.types';
import { getContainer } from '@/di/containers';
export async function getUser(): ActionResponse<User | null> {
	return {
		success: false,
		data: null,
		message: 'User not found',
	};
}

export async function getCurrentUser(): ActionResponse<User> {
	const container = getContainer();
	const usecase = container.user.GetCurrentUserUseCase;

	const result = await usecase.execute();

	if (!result.success) return ActionFailure(result.error.message);
	if (!result.data) return ActionFailure('User not found');

	return ActionSuccess(result.data, 'User found');
}

export async function getCurrentUserId(): ActionResponse<UserProps['id']> {
	const container = getContainer();
	const getCurrentUserId = container.user.GetCurrentUserIdUseCase;

	const userIdResult = await getCurrentUserId.execute();

	if (!userIdResult.success) return ActionFailure(userIdResult.error.message);
	if (!userIdResult.data) return ActionFailure('User not found');

	return ActionSuccess(userIdResult.data, 'User found');
}
