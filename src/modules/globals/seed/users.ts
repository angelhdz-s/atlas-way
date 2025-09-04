import { Users } from "@/prisma/client";

export const USERS: Users[] = [
	{
		id: "user_1",
		email: "admin@example.com",
		name: "Angel Admin",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
