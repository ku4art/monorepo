import z from 'zod'

export const zCreatePostInputSchema = z.object({
  name: z.string().min(1),
  nick: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed'),
  description: z.string().min(1),
  text: z.string().min(100, 'Text must be at least 100 characters long'),
})
