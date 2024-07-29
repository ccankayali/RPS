import { RouteObject } from 'react-router-dom'

import { DASHBOARD_ROUTES } from './constants/routes'
import { Layout } from './pages/Layout'

export const dashboardRoutes: RouteObject[] = [
  {
    path: DASHBOARD_ROUTES.dashboard.path,
    element: <Layout />
  }
]