import { getContainer } from '@/di/containers';
import {
  ActionFailure,
  ActionSuccess,
  type ActionResponse,
} from '@/shared/presentation/action.response';
import type { AuthSession } from '@/modules/auth/domain/errors/auth-session.types';
import { nextAuthLogin } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.config';

export async function getSession(): ActionResponse<AuthSession | null> {
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

export async function login(): ActionResponse<null> {
  try {
    await nextAuthLogin();
    return ActionSuccess(null, 'Logged successfully');
  } catch (e) {
    console.error(e);
    return ActionFailure('Error trying to log in');
  }
}

export async function logout(): ActionResponse<null> {
  const container = getContainer();
  const logout = container.auth.LogoutUseCase;
  const logoutResult = await logout.execute();
  if (!logoutResult.success) return ActionFailure(logoutResult.error.message);
  return ActionSuccess(null, 'Logged successfully');
}
