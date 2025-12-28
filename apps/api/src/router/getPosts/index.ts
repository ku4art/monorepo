import { trpc } from '@/lib/trpc'

export const getPostsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const ideas = await ctx.prisma.post.findMany({
    select: {
      nick: true,
      name: true,
      description: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
  return { ideas }
})
