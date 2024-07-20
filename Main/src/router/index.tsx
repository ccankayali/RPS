import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { Login } from '../modules/auth/pages/Login'; // Import your components
import { dashboardRoutes } from '../modules/panel/routes';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={ROUTES.auth.login.path} />
    },
    {
        path: ROUTES.auth.login.path,
        element: <Login />
    },
    {
        path: "/dashboard",
        children: [...dashboardRoutes]
    }
]);
