import { getServerSession } from 'next-auth';
import { authOptions } from '@/shared/infrastructure/next-auth/next-auth.options';

export async function getCurrentSession() {
  return await getServerSession(authOptions);
}
