import { z } from 'zod/v3';

export const sessionFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  description: z.null().or(
    z
      .string({
        message: 'Description must be string',
      })
      .max(100, 'Description must be at most 100 characters')
  ),
  exercises: z.array(z.object({ id: z.string() })).nonempty('Select at least one exercise'),
});
export type SessionForm = z.infer<typeof sessionFormSchema>;
