'use server';
import { User } from '@/modules/user/domain/user.entity';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
export async function getUser(): ActionResponse<User | null> {
	return {
		success: false,
		data: null,
		message: 'User not found',
	};
}
