import { Muscles } from '@/prisma/client';

export type MusclesFormData = Omit<Muscles, 'id' | 'createdAt' | 'updatedAt'>;

export type MuscleIdName = Pick<Muscles, 'id' | 'name'>;
