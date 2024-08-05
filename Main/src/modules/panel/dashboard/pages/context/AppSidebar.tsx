import '../../../../../styles/layout.scss';

import React, { useState, useRef, } from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { useNavigate } from 'react-router';

import { DASHBOARD_SIDEBAR_ITEMS } from '../../constants/routes';



export default function AppSidebar() {
    const [visible, setVisible] = useState<boolean>(false);
    const btnRef1 = useRef<any>(null);
    const btnRef2 = useRef<any>(null);
    const btnRef3 = useRef<any>(null);

    const navigate = useNavigate();

    const sidebarRoutes = {
        dashboard: () => {
            navigate(DASHBOARD_SIDEBAR_ITEMS.dashboard.path);
        },
        admin: () => {
            navigate(DASHBOARD_SIDEBAR_ITEMS.admin.path);
        },
        settings: () => {
            navigate(DASHBOARD_SIDEBAR_ITEMS.setting.path);
        },

    }

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="sidebar-container min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <img src='../../../../../../public/logo-white.svg' alt="logo" className="h-3rem w-3rem" />
                                        <span className="font-semibold text-2xl text-primary">CAN</span>
                                    </span>
                                    <span>
                                        <button type="button" ref={closeIconRef as React.RefObject<HTMLButtonElement>} onClick={(e) => hide(e)} className="h-2rem w-2rem p-link layout-topbar-button">
                                            <i className="pi pi-times"></i>
                                        </button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                                    onClick={() => {
                                                        sidebarRoutes.dashboard(); 
                                                        setVisible(false);
                                                    }}
                                                    >
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                    <Ripple />
                                                </a>

                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-bar mr-2"></i>
                                                                <span className="font-medium">Performance</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef3} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium" 
                                                            onClick={() => {
                                                                sidebarRoutes.settings(); 
                                                                setVisible(false);
                                                            }}  
                                                        >Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="m-auto">
                                    <hr className=" border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer  gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                    onClick={() => {
                                                        sidebarRoutes.admin(); 
                                                        setVisible(false);
                                                    }}
                                        >
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Can</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>

            <button type="button" onClick={() => setVisible(true)} className="p-link layout-topbar-button">
                <i className="p-button-icon p-c pi pi-bars"></i>
            </button>
        </div>
    )
}
        
        


// <span>
// <button type="button"  ref={closeIconRef as React.RefObject<HTMLButtonElement>} onClick={(e) => hide(e)} className="h-3rem w-3rem rounded outlined ml-8">
//     <i className="pi pi-times"></i>
// </button>
// </span>