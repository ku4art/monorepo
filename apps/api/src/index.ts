import cors from 'cors'
import express from 'express'

import { applyTrpcToExpressApp } from '@/lib/trpc'
import { trpcRouter } from '@/router'

const app = express()

app.use(cors())

applyTrpcToExpressApp(app, trpcRouter)

app.listen(3000, () => console.info('API server started on http://localhost:3000'))
