import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  type SignInOptions,
} from 'next-auth/react';
import { AUTH_PROVIDER } from '@/modules/auth/infrastructure/next-auth/auth.next-auth.constants';

const authLoginOptionsHandler = (redirect: boolean): SignInOptions => {
  if (redirect)
    return {
      redirect,
      callbackUrl: '/dashboard',
    };

  return {
    redirect,
  };
};

export const nextAuthLogin = (redirect: boolean = false) =>
  nextAuthSignIn(AUTH_PROVIDER, authLoginOptionsHandler(redirect));

export const nextAuthLogout = () =>
  nextAuthSignOut({
    redirect: true,
    callbackUrl: '/',
  });
