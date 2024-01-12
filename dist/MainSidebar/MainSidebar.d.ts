import React, { ComponentType, ReactNode, ReactElement } from "react";
import 'tailwindcss/tailwind.css';
interface ResponsiveNavLink {
    active?: boolean;
    className?: string;
    children: ReactNode;
}
interface SidebarProps {
    gtlsLogo: ReactNode;
    SupportModal: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    ResponsiveNavLink: ComponentType<ResponsiveNavLink> | ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    LogoutIcon: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    SupportIcon: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    XMarkIcon: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    ChevronDownIcon?: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
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
