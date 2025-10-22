'use server';

import { PrismaClient } from '@/prisma/client';
import { MuscleIdName } from '../types';

const prisma = new PrismaClient();

export async function getMuscles() {
	return prisma.muscles.findMany();
}

export async function getMuscleIdName(): Promise<MuscleIdName[]> {
	return prisma.muscles.findMany({
		select: {
			id: true,
			name: true,
		},
		orderBy: {
			name: 'asc',
		},
	});
}
