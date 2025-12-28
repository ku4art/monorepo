// import { ideas } from '@/lib/mock'
import { trpc } from '@/lib/trpc'

import { zGetPostInputSchema } from './input'

export const getPostTrpcRoute = trpc.procedure.input(zGetPostInputSchema).query(async ({ input, ctx }) => {
  const idea = await ctx.prisma.post.findUnique({
    where: {
      id: input.idPost,
    },
  })
  return { idea }
})
