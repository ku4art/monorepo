import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { type Express } from 'express'
import SuperJSON from 'superjson'

import { type TrpcRouter } from '@/router'

import { AppContext } from './ctx'

export const trpc = initTRPC.context<AppContext>().create({
  transformer: SuperJSON,
})

export const applyTrpcToExpressApp = (expressApp: Express, appContext: AppContext, trpcRouter: TrpcRouter) => {
  expressApp.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      allowMethodOverride: true, // option for development environment
      createContext: () => appContext,
    })
  )
}
