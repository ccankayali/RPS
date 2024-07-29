import { RouteObject } from 'react-router-dom'

import { DASHBOARD_ROUTES } from './constants/routes'
import { Dashboard } from './pages/Dashboard'

export const dashboardRoutes: RouteObject[] = [
  {
    path: DASHBOARD_ROUTES.dashboard.path,
    element: <Dashboard />
  }
]