"use server";
import { PrismaClient } from "@/prisma/client";
const prisma = new PrismaClient();

export async function getExercisesIdName() {
	return prisma.exercises.findMany({
		select: { id: true, name: true },
		orderBy: { name: "asc" },
	});
}
