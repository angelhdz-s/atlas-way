"use server";

import { PrismaClient } from "@/prisma/client";

const prisma = new PrismaClient();
export async function getUser() {
	return prisma.users.findFirst();
}

export async function getUserId() {
	return prisma.users.findFirst({
		select: { id: true },
	});
}
