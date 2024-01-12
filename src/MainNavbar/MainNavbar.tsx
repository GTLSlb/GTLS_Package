import React, { ComponentType, ReactNode, ReactElement  } from "react";
import 'tailwindcss/tailwind.css'

interface NavBarProps {
    NotificationPanel: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    systemName: string;
    threeBarsOnClick: () => void;
    notificationCondition: string;
    ThreeBarsSVG: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
}

export const MainNavbar = ({ NotificationPanel, ThreeBarsSVG, systemName, threeBarsOnClick, notificationCondition }: NavBarProps ) => {
    return (
        <header className="w-full flex flex-1 flex-col  md:ml-20 fixed top-0 z-50 shadow-md">
            <div className="relative z-10 flex h-16 flex-shrink-0 w-full border-b border-gray-200 bg-white shadow-sm ">
                <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={threeBarsOnClick}
                >
                    <span className="sr-only">Open sidebar</span>
                    {typeof ThreeBarsSVG === 'string' ? (
                        <img className="h-6 w-6" src={ThreeBarsSVG} />
                    )
                    : (ThreeBarsSVG as ReactNode)
                    }
                    
                </button>
                <div className="flex justify-between items-center lg:gap-x-16 px-4 sm:px-6 w-11/12">
                    <div className=" text-sm font-bold leading-7 text-gray-700 sm:truncate sm:text-lg sm:tracking-tight mr-2">
                        <span className="text-goldd">GOLD </span>TIGER{" "}
                        {systemName}
                    </div>
                    <div className={notificationCondition}>
                    {typeof NotificationPanel === 'string' ? (
                            <img className="h-6 w-6" src={NotificationPanel} />
                        )
                        : (NotificationPanel as ReactNode)
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}