import { Outlet } from "react-router-dom";

export const PanelLayout = () => {
    return (
        <div>
            <h1>PanelLaoyout</h1>
            <Outlet />
        </div>
    );
}