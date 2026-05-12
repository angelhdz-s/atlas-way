'use server';

import { getContainer } from '@/di/containers';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponseProps,
} from '@/shared/presentation/action.response';
import type { AuthSession } from '@/modules/auth/domain/auth-session.types';

export async function getSession(): Promise<ActionResponseProps<AuthSession | null>> {
  const container = getContainer();
  const getCurrentSession = container.auth.GetCurrentSessionUseCase;
  const sessionResult = await getCurrentSession.execute();
  if (!sessionResult.success)
    return {
      success: false,
      message: sessionResult.error.message,
      data: null,
    };
  return {
    success: true,
    message: 'Session obtained successfully',
    data: sessionResult.data,
  };
}

export async function logout(): Promise<ActionResponseProps<null>> {
  const container = getContainer();
  const logout = container.auth.LogoutUseCase;
  const logoutResult = await logout.execute();
  if (!logoutResult.success) return ActionFailure(logoutResult.error.message);
  return ActionSuccess(null, 'Logged out successfully');
}
