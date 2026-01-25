import { authOptions } from '@/shared/infrastructure/nextauth/next-auth.options';
import NextAuth, { User } from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
