import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'
import SuperJSON from 'superjson'

import { AppContext } from './ctx'

const trpc = initTRPC.context<AppContext>().create({
  transformer: SuperJSON,
})

export const appRouter = trpc.router
export const appProcedure = trpc.procedure

export const applyTrpcToExpressApp = (
  expressApp: Express,
  appContext: AppContext,
  trpcRouter: ReturnType<typeof appRouter>
) => {
  expressApp.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      allowMethodOverride: true, // option for development environment
      createContext: () => appContext,
    })
  )
}
