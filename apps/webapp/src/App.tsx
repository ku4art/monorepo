import { TrpcProvider } from './lib/trpc.tsx'
import { AllIdeasPage } from './pages/AllIdeasPage/index.tsx'

function App() {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}

export default App
