
import { RouterProvider } from 'react-router'
import { router } from './router'
import { Loading } from './core/components/Loading'

function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App
