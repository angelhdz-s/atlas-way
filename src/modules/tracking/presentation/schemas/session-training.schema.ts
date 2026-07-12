import z from 'zod/v3';

export const sessionTrainingSetSchema = z
  .object({
    set: z.number().min(1),
    reps: z.number().min(1).optional(),
    weight: z.number().min(0).optional(),
    rir: z.number().min(0).optional(),
    status: z.enum(['pending', 'complete', 'cancel']),
  })
  .superRefine(({ reps, rir, weight, status }, ctx) => {
    const values = [reps, rir, weight];

    const allUndefined = values.every((v) => v === undefined) && status === 'cancel';
    if (allUndefined) return;

    if (reps === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['reps'],
        message: "Reps can't be empty",
        fatal: false,
      });

    if (rir === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['rir'],
        message: "Repeats in reserve can't be empty",
        fatal: false,
      });
    if (weight === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['weight'],
        message: "Weight can't be empty",
        fatal: false,
      });
  });

export type SessionTrainingSetForm = z.infer<typeof sessionTrainingSetSchema>;

export const sessionTrainingSchema = z.object({
  exercises: z.array(
    z.object({
      exerciseId: z.string().uuid(),
      status: z.enum(['pending', 'complete', 'cancel']),
      sets: z.array(sessionTrainingSetSchema),
    })
  ),
});

export type SessionTrainingForm = z.infer<typeof sessionTrainingSchema>;
