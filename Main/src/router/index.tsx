import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { dashboardRoutes } from '../modules/panel/routes';
import { NotFound } from '../core/pages/NotFound';
import { AuthLayout } from '../core/layouts/auth/AuthLayout';
import { authRoutes } from '../modules/auth/routes';
import { PanelLayout } from '../core/layouts/panel/PanelLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={ROUTES.auth.login.path} />
    },
    {
        element: <AuthLayout />,
        children: [...authRoutes]
    },
    {
        element: <PanelLayout />,
        children: [...dashboardRoutes]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
