import z from 'zod'

export const zGetPostInputSchema = z.object({
  idPost: z.string(),
})
