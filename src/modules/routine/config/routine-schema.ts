import z from "zod";

export const routineFormSchema = z.object({
	name: z
		.string({ error: "Name must be a string" })
		.min(3, { error: "Name must be at least 3 characters long" })
		.max(50, { error: "Name must be at most 50 characters long" }),
	description: z
		.string({ error: "Description must be a string" })
		.max(255, { error: "Description must be at most 255 characters long" })
		.optional(),
	cycle: z.enum(["normal", "custom"], { error: "Invalid option" }),
	days: z
		.number({ error: "Days must be a number" })
		.min(2, { error: "Days must be at least 2" })
		.max(30, { error: "Days must be at most 30" })
		.optional(),
});

export type RoutineForm = z.infer<typeof routineFormSchema>;
