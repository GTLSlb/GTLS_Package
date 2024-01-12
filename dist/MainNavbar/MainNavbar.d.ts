import React, { ComponentType, ReactNode, ReactElement } from "react";
import 'tailwindcss/tailwind.css';
interface NavBarProps {
    NotificationPanel: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    systemName: string;
    threeBarsOnClick: () => void;
    notificationCondition: string;
    ThreeBarsSVG: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
}
export declare const MainNavbar: ({ NotificationPanel, ThreeBarsSVG, systemName, threeBarsOnClick, notificationCondition }: NavBarProps) => React.JSX.Element;
export {};
