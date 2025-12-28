import crypto from 'crypto'

import { trpc } from '@/lib/trpc'

import { zSignUpInputSchema } from './input'

export const signUpTrpcRoute = trpc.procedure.input(zSignUpInputSchema).mutation(async ({ input, ctx }) => {
  const hashedPassword = crypto.createHash('sha256').update(input.password).digest('hex')
  const exUser = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  })
  if (exUser) {
    throw new Error('User already exists')
  }
  await ctx.prisma.user.create({
    data: {
      email: input.email,
      password: hashedPassword,
    },
  })
  return true
})
