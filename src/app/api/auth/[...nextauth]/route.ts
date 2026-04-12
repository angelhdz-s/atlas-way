import NextAuth from 'next-auth';
import { authOptions } from '@/shared/infrastructure/next-auth/next-auth.options';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
