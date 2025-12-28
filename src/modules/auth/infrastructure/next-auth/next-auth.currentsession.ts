import { getServerSession } from 'next-auth';
import { authOptions } from './next-auth.options';

export async function getCurrentSession() {
	return await getServerSession(authOptions);
}
