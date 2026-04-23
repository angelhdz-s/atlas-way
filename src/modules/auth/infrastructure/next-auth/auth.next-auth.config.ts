import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';
import { AUTH_PROVIDER } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.constants';

export const nextAuthLogin = () =>
  nextAuthSignIn(AUTH_PROVIDER, {
    redirect: false,
  });

export const nextAuthLogout = () =>
  nextAuthSignOut({
    redirect: true,
    callbackUrl: '/',
  });
