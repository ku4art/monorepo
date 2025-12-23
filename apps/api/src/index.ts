import express from 'express'

import { trpcRouter } from '@/router'
import { applyTrpcToExpressApp } from '@/lib/trpc'
import cors from 'cors'

const app = express()

app.use(cors())

applyTrpcToExpressApp(app, trpcRouter)

app.listen(3000, () => console.info('API server started on http://localhost:3000'))
