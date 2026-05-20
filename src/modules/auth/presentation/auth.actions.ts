'use server';

import type { ActionResponseProps } from '@/shared/presentation/action.response';
import type { AuthSession } from '@/modules/auth/domain/auth-session.types';
import { getServerSession } from 'next-auth';
import { getContainer } from '@/di/containers';
import { ActionFailure, ActionSuccess } from '@/shared/presentation/action.response';

// This server action is the only one public
// react-doctor-disable-next-line react-doctor/server-auth-actions
export async function getSession(): Promise<ActionResponseProps<AuthSession | null>> {
  const container = getContainer();
  const getCurrentSession = container.auth.GetCurrentSessionUseCase;
  const sessionResult = await getCurrentSession.execute();
  if (!sessionResult.success) return ActionFailure(sessionResult.error.message);

  return ActionSuccess(sessionResult.data, 'Session obtained successfully');
}

export async function logout(): Promise<ActionResponseProps<null>> {
  const session = await getServerSession();
  if (!session) return ActionFailure('Unauthorized');

  const container = getContainer();
  const logout = container.auth.LogoutUseCase;
  const logoutResult = await logout.execute();
  if (!logoutResult.success) return ActionFailure(logoutResult.error.message);

  return ActionSuccess(null, 'Logged out successfully');
}
