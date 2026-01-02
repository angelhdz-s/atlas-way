import { authOptions } from '@/modules/auth/infrastructure/next-auth/next-auth.options';
import NextAuth, { User } from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
