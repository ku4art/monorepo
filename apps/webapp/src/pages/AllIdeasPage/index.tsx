import { trpc } from '@/lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

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
          <div key={`${idea.nick + idx}`}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        ))}
    </div>
  )
}
