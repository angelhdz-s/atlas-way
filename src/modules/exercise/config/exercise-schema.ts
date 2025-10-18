import { z } from "zod";
export const exerciseSchema = z.object({
	name: z
		.string()
		.min(3, { error: "Name must be at least 3 characters" })
		.max(50, { error: "Name must be at most 50 characters" }),
	description: z.string().optional(),
	muscles: z
		.array(z.object({ id: z.string() }))
		.nonempty({ message: "Select at least one muscle" }),
});

export type ExerciseType = z.infer<typeof exerciseSchema>;

export const exerciseInitialStatsSchema = z.object({
	sets: z.number().min(1, { error: "Sets must be at least 1" }).optional(),
	reps: z.number().min(1, { error: "Reps must be at least 1" }).optional(),
	weight: z.number().min(0, { error: "Weight must be at least 0" }).optional(),
});

export type ExerciseInitialStatsType = z.infer<
	typeof exerciseInitialStatsSchema
>;

export const exerciseFormSchema = z.object({
	exercise: exerciseSchema,
	initialStats: exerciseInitialStatsSchema.optional(),
});
export type ExerciseForm = z.infer<typeof exerciseFormSchema>;
