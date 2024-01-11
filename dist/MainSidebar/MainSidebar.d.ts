import React, { ComponentType, ReactNode } from "react";
import 'tailwindcss/tailwind.css';
interface ResponsiveNavLink {
    active?: boolean;
    className?: string;
    children: ReactNode;
}
interface SidebarProps {
    gtlsLogo: ReactNode;
    SupportModal: ComponentType<any>;
    ResponsiveNavLink: ComponentType<ResponsiveNavLink>;
    LogoutIcon: ComponentType<any>;
    SupportIcon: ComponentType<any>;
    XMarkIcon: ComponentType<any>;
    ChevronDownIcon: ComponentType<any>;
    handleLogout: () => void;
    sidebarElements: Record<string, any>[];
    allowedApplications: Record<string, any>[];
    setMobileMenuOpen: () => void;
    handleClickSide: () => void;
    handleMenuSide: () => void;
    handleClick: () => void;
    currentAppId: Number;
    mobileMenuOpen: boolean;
}
export declare const MainSidebar: ({ gtlsLogo, mobileMenuOpen, XMarkIcon, ChevronDownIcon, handleClick, handleMenuSide, handleClickSide, ResponsiveNavLink, setMobileMenuOpen, currentAppId, allowedApplications, sidebarElements, LogoutIcon, SupportIcon, handleLogout, SupportModal }: SidebarProps) => React.JSX.Element;
export {};
