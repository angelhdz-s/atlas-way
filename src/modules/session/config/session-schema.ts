import { z } from "zod/v3";

export const sessionFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    description: z
        .string()
        .max(500, "Description must be at most 500 characters long")
        .optional(),
    exercises: z
        .array(z.object({ id: z.string() }))
        .nonempty("At least one exercise is required"),
});
export type SessionForm = z.infer<typeof sessionFormSchema>;
