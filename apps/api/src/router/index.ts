import { trpc } from '@/lib/trpc'

// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { createPostTrpcRoute } from './createPost'
import { getPostTrpcRoute } from './getPost'
import { getPostsTrpcRoute } from './getPosts'
import { signUpTrpcRoute } from './signUp'
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createPost: createPostTrpcRoute,
  getPost: getPostTrpcRoute,
  getPosts: getPostsTrpcRoute,
  signUp: signUpTrpcRoute,
  // @endindex
})

export type TrpcRouter = typeof trpcRouter
