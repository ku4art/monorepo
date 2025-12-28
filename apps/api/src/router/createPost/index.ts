// import { ideas } from '@/lib/mock'
import { trpc } from '@/lib/trpc'

import { zCreatePostInputSchema } from './input'

export const createPostTrpcRoute = trpc.procedure.input(zCreatePostInputSchema).mutation(async ({ input, ctx }) => {
  const exPost = await ctx.prisma.post.findFirst({
    where: {
      name: input.name,
    },
  })
  if (exPost) {
    throw Error('Post already exists')
  }
  await ctx.prisma.post.create({
    data: input,
  })
  return true
})
