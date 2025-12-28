'use server';
import { User } from '@/modules/user/domain/user.entity';
import { UserPrismaRepository } from '@/modules/user/infrastructure/user.prisma.repository';
import { ActionResponse, ActionResponseProps } from '@/shared/contracts/actions.response';
export async function getUser(): ActionResponse<User | null> {
	return {
		success: user ? true : false,
		data: user,
		message: user ? `User logged found` : 'User not found',
	};
}
