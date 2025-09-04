import { DayTypes } from "@/prisma/client";

export const DAY_TYPES: DayTypes[] = [
	{
		id: "training",
		name: "Training",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "rest",
		name: "Rest",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
