const getRouteParam = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => {
    return { ...acc, [key]: `:${key}` }
  }, {}) as Record<keyof T, string>
}

export const getAllPostsRoute = () => '/'

export const viewPostRouteParams = getRouteParam({ idPost: true })
export type ViewPostRouteParams = typeof viewPostRouteParams
export const getViewPostRoute = ({ idPost }: ViewPostRouteParams) => `/posts/${idPost}`
