import { Link } from "react-router-dom"
import 'primeicons/primeicons.css';
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";
import AppSidebar from "./AppSidebar";
import { Logout } from "./Logout";

const AppTopbar = () => {
    const navigate = useNavigate();

    const onTopbarAdminClick = () => {
        navigate(DASHBOARD_ROUTES.admin.path);
    }

    const onSettingsClick = () => {
        navigate(DASHBOARD_ROUTES.settings.path);
    }
    
    return (
    <div className="layout-topbar">
        <Link to="/" className="layout-topbar-logo">
            <img alt="Logo" src="../../../../public/logo-white.svg" />
            <span>CAN</span>
        </Link>
            <div className="layout-topbar-icons">

            <Logout />

            <AppSidebar />

            <button className="p-link layout-topbar-button" onClick={onTopbarAdminClick}>
                <i className="pi pi-user"></i>
            </button>

            <button className="p-link layout-topbar-button" onClick={onSettingsClick}>
                <i className="pi pi-spin pi-cog"></i>
            </button>
        </div>
        
    </div>
  )
}

export default AppTopbar