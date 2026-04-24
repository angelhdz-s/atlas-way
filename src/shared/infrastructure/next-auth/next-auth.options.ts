import GoogleProvider from 'next-auth/providers/google';
import { getContainer } from '@/di/containers';
import type { NextAuthOptions, User as NextAuthUser } from 'next-auth';
import type { LoginInput } from '@/modules/auth/application/dtos/login-input.dto';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    async signIn({ user }: { user: NextAuthUser }) {
      if (!user.email || !user.name) return;

      const containers = getContainer();

      const login = containers.auth.LoginUseCase;

      const newUser: LoginInput = {
        email: user.email,
        name: user.name,
      };

      await login.execute(newUser);
    },
  },
};
