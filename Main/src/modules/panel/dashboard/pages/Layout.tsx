import { useRef } from "react"
import AppTopbar from "../../layout/AppTopbar"
import { AppTopbarRef } from "../../types"
import '../../../../styles/layout.scss'
import 'primeicons/primeicons.css';
import AppSidebar from "../../layout/AppSidebar";

export const Layout = () => {
    const topbarRef = useRef<AppTopbarRef>(null)
    const sidebarRef = useRef<HTMLDivElement>(null);

    return (
        <div className="dashboard-container">
            <AppTopbar ref={topbarRef} />
            <div ref={sidebarRef} className="layout-sidebar">
                <AppSidebar />
            </div>
        </div>
    )
}