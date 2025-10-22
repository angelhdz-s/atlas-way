import { Users } from '@/prisma/client';

export type UsersWithoutId = Omit<Users, 'id'>;
