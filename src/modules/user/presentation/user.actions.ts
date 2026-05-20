'use server';

import type { User } from '@/modules/user/domain/user.entity';
import type { UserProps } from '@/modules/user/domain/user.types';
import type { ActionResponseProps } from '@/shared/presentation/action.response';
import { getServerSession } from 'next-auth';
import { getContainer } from '@/di/containers';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';

export async function getUser(): Promise<ActionResponseProps<User | null>> {
  const session = await getServerSession();
  if (!session) return ActionFailure('Unauthorized');

  return ActionSuccess(null, 'User found');
}

export async function getCurrentUser(): Promise<ActionResponseProps<User>> {
  const session = await getServerSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const getCurrentUser = container.user.GetCurrentUserUseCase;
  const userResult = await getCurrentUser.execute();
  if (!userResult.success) return ActionFailure(userResult.error.message);
  if (!userResult.data) return ActionFailure('User not found');

  return ActionSuccess(userResult.data, 'User found');
}

export async function getCurrentUserId(): Promise<ActionResponseProps<UserProps['id']>> {
  const session = await getServerSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const getCurrentUserId = container.user.GetCurrentUserIdUseCase;
  const userIdResult = await getCurrentUserId.execute();
  if (!userIdResult.success) return ActionFailure(userIdResult.error.message);
  if (!userIdResult.data) return ActionFailure('User not found');

  return ActionSuccess(userIdResult.data, 'User found');
}
