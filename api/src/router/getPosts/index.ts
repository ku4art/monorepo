import { appProcedure } from '../../lib/trpc'

export const getPostsTrpcRoute = appProcedure.query(async ({ ctx }) => {
  const ideas = await ctx.prisma.post.findMany({
    select: {
      title: true,
      img: true,
      description: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
  return { ideas }
})
