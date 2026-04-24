import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';
import { AUTH_PROVIDER } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.constants';

export const nextAuthLogin = (redirect: boolean = false) =>
  nextAuthSignIn(AUTH_PROVIDER, {
    redirect,
    callbackUrl: redirect ? '/dashboard' : undefined,
  });

export const nextAuthLogout = () =>
  nextAuthSignOut({
    redirect: true,
    callbackUrl: '/',
  });
