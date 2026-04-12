import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/prisma/client';
import { pool } from '@/shared/infrastructure/prisma/pg';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: new PrismaPg(pool),
    log: ['error'],
    //log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
