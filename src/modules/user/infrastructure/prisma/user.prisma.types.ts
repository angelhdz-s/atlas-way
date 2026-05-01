import type { Prisma } from '@/prisma/client';

export const userIncludeAnatomy = {
  include: {
    role: true,
  },
} satisfies Prisma.UsersDefaultArgs;

export type UserPrisma = Prisma.UsersGetPayload<typeof userIncludeAnatomy>;

export type UserPrismaCreate = Prisma.UsersCreateInput;

export type UserPrismaUpdate = Prisma.UsersUpdateInput;
