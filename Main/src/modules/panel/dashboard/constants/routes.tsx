import { ADMIN_PATH, PANEL_PATH, SETTINGS_PATH } from "../../../../router/constants";

export const DASHBOARD_ROUTES = {
  dashboard: {
    path: PANEL_PATH,
    label: 'Layout'
  },
  admin: {
    path: ADMIN_PATH,
    label: 'Admin'
  },
  settings: {
    path: SETTINGS_PATH,
    label: 'Settings'
  }
}

export const DASHBOARD_SIDEBAR_ITEMS = {
  dashboard: {
    label: 'Dashboard',
    path: DASHBOARD_ROUTES.dashboard.path,
  },
  admin: {
    label: 'Admin',
    path: DASHBOARD_ROUTES.admin.path,
  },
  setting: {
    label: 'Settings',
    path: DASHBOARD_ROUTES.settings.path,
  }
}