import { RouteObject } from 'react-router-dom';
import { AUTH_ROUTES } from './constants/routes';
import { Login } from './pages/Login';

export const authRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.login.path,
    element: <Login />,
    index: true
  }
];