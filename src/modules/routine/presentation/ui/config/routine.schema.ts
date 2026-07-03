import { z } from 'zod/v3';

const routineCycleSchema = z.enum(['week', 'custom'], {
  message: 'Invalid option',
});

const sessions = z.array(
  z.object(
    {
      sessionId: z
        .string({ message: 'Invalid Session ID' })
        .nonempty({ message: 'Session ID can not be empty' })
        .or(z.null()),
      day: z.number({ message: 'Invalid Day' }),
      dayName: z
        .string({ message: 'Invalid day name' })
        .nonempty({ message: 'Day name can not be empty' }),
    },
    { message: 'Sessions must be an array' }
  )
);

export const routineFormSchema = z.object({
  name: z
    .string({ message: 'Name must be a string' })
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  description: z.null().or(
    z
      .string({
        message: 'Description must be string',
      })
      .max(100, 'Description must be at most 100 characters')
  ),
  cycleType: routineCycleSchema,
  active: z.boolean(),
  initialDate: z.date({
    message: 'Initial date is required',
  }),
  days: z
    .number({ message: 'Days must be a number' })
    .min(2, 'Days must be at least 2')
    .max(30, 'Days must be at most 30')
    .optional(),
  sessions,
});

export type RoutineForm = z.infer<typeof routineFormSchema>;
