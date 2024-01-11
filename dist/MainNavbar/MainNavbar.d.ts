import React, { ComponentType } from "react";
import 'tailwindcss/tailwind.css';
interface NavBarProps {
    NotificationPanel: ComponentType<any>;
    systemName: string;
    threeBarsOnClick: () => void;
    notificationCondition: string;
    ThreeBarsSVG: ComponentType<any>;
}
export declare const MainNavbar: ({ NotificationPanel, ThreeBarsSVG, systemName, threeBarsOnClick, notificationCondition }: NavBarProps) => React.JSX.Element;
export {};
