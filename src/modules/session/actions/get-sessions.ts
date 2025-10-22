'use server';

import { PrismaClient, Sessions } from '@/prisma/client';

const prisma = new PrismaClient();

export async function getSessions(): Promise<Sessions[]> {
	return await prisma.sessions.findMany();
}
