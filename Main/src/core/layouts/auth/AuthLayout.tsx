import { Outlet } from "react-router-dom";
import '../../../styles/layout.scss';

export const AuthLayout = () => {
    return (
        <div className="auth-container">
            <Outlet />
        </div>
    );
}