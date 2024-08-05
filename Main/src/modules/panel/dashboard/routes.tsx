import { RouteObject } from 'react-router-dom'

import { DASHBOARD_ROUTES } from './constants/routes'
import { Layout } from './pages/Layout'
import Admin from './pages/Admin'
import Settings from './pages/Settings'

export const dashboardRoutes: RouteObject[] = [
  {
    path: DASHBOARD_ROUTES.dashboard.path,
    element: <Layout />
  },
  {
    path: DASHBOARD_ROUTES.admin.path,
    element: <Admin />
  },
  {
    path: DASHBOARD_ROUTES.settings.path,
    element: <Settings />
  }
]