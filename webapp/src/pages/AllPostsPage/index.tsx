import { Link } from 'react-router-dom'

import { getViewPostRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const AllPostsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPosts.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data &&
        data.ideas.map((idea, idx) => (
          <div key={`${idea.title + idx}`}>
            <h2>
              <Link to={getViewPostRoute({ idPost: idea.title })}>{idea.title}</Link>
            </h2>
            <p>{idea.description}</p>
          </div>
        ))}
    </div>
  )
}
