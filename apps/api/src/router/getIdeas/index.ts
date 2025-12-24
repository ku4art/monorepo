import { pick } from "lodash"

import { ideas } from "@/lib/mock"
import { trpc } from "@/lib/trpc"

export const getIdeasTrpcRoute = trpc.procedure.query(() => {
  return { ideas: ideas.map((idea) => pick(idea, ['nick', 'name', 'description'])) }
})