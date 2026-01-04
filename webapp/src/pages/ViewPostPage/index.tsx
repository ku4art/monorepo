import { useParams } from 'react-router-dom'

import { type ViewPostRouteParams } from '../../lib/routes'

export const ViewPostPage = () => {
  const { idPost } = useParams() as ViewPostRouteParams

  return (
    <div>
      <h1>{idPost}</h1>
      <p>Description of idea 1...</p>
      <div>
        <p>Text paragrph 1 of idea 1...</p>
        <p>Text paragrph 2 of idea 1...</p>
        <p>Text paragrph 3 of idea 1...</p>
      </div>
    </div>
  )
}
