import { PrismaClient } from '@/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { pool } from './pg';

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		adapter: new PrismaPg(pool),
		log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
