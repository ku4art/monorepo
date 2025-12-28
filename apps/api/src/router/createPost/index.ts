// import { ideas } from '@/lib/mock'
import { trpc } from '@/lib/trpc'

import { zCreatePostInputSchema } from './input'

export const createPostTrpcRoute = trpc.procedure.input(zCreatePostInputSchema).mutation(async ({ input, ctx }) => {
  const exPost = await ctx.prisma.post.findFirst({
    where: {
      title: input.title,
    },
  })
  if (exPost) {
    throw new Error('Post already exists')
  }
  await ctx.prisma.post.create({
    data: input,
  })
  return true
})
