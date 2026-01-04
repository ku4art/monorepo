import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { getAllPostsRoute, getViewPostRoute, viewPostRouteParams } from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc.tsx'
import { AllPostsPage } from './pages/AllPostsPage/index.tsx'
import { ViewPostPage } from './pages/ViewPostPage/index.tsx'

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllPostsRoute()} element={<AllPostsPage />} />
          <Route path={getViewPostRoute(viewPostRouteParams)} element={<ViewPostPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
