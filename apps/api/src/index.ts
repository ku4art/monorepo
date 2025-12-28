import cors from 'cors'
import express from 'express'

import { applyTrpcToExpressApp } from '@/lib/trpc'
import { trpcRouter } from '@/router'

import { type AppContext, createAppContext } from './lib/ctx'

void (async () => {
  let ctx: AppContext | null = null
  try {
    ctx = createAppContext()

    const app = express()
    app.use(cors())

    applyTrpcToExpressApp(app, ctx, trpcRouter)

    app.listen(3000, () => console.info('API server started on http://localhost:3000'))
  } catch (error) {
    console.log(error)
    ctx?.stop()
  }
})()
