import { AUTH_ROUTES } from "../modules/auth/constants/routes";
import { DASHBOARD_ROUTES } from "../modules/panel/dashboard/constants/routes";

export const ROUTES = {
    auth: AUTH_ROUTES,
    ...DASHBOARD_ROUTES
}