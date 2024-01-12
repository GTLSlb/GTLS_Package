import React, { Fragment, ComponentType, ReactNode, ReactElement } from "react";
import 'tailwindcss/tailwind.css'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "react-headless-accordion";

import { Dialog, Menu, Transition } from "@headlessui/react";

interface ResponsiveNavLink{
    active?: boolean
    className?: string
    children: ReactNode
}

interface SidebarProps {
    gtlsLogo: ReactNode;
    SupportModal: ComponentType<any> | ReactElement | ReactNode | JSX.Element;
    ResponsiveNavLink: ComponentType<ResponsiveNavLink>;
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

export const MainSidebar = ({ gtlsLogo, mobileMenuOpen, XMarkIcon, ChevronDownIcon, handleClick, handleMenuSide, handleClickSide, ResponsiveNavLink, setMobileMenuOpen, currentAppId, allowedApplications, sidebarElements, LogoutIcon, SupportIcon, handleLogout, SupportModal }: SidebarProps ) => {
    
    function classNames(...classes: (string | undefined | null | false)[]): string {
        return classes.filter(Boolean).join(" ");
    }

    return(
        <div>
            <div className="hidden md:flex md:flex-shrink-0 h-full fixed top-0 left-0 z-50 w-auto">
                <div className="flex w-20 flex-col">
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-gray-800 containerscroll">
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-gray-800 py-4">
                                <a href="/">
                                    {typeof gtlsLogo === 'string' ? (
                                        <img src={gtlsLogo} alt="tiger" />
                                    ) : (
                                        <div>{gtlsLogo}</div>
                                    )}
                                </a>
                            </div>
                            <nav
                                aria-label="Sidebar"
                                className="flex flex-col items-center space-y-3 pt-6"
                            >
                                {allowedApplications?.map((item) => (
                                    <a
                                        href={item?.AppURL}
                                        key={item?.AppId}
                                        target={
                                            item?.id === 0 ? undefined : "_blank"
                                        }
                                    >
                                        {" "}
                                        <button
                                            key={item?.AppAbv}
                                            className={classNames(
                                                item?.AppId == currentAppId
                                                    ? "bg-gray-700 text-white"
                                                    : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                            )}
                                            // aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.icon ? (
                                                <item.icon
                                                    className={classNames(
                                                        item?.current
                                                            ? "text-yellow-400"
                                                            : "text-gray-400 group-hover:text-white",
                                                        "h-6 w-6"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <img
                                                    src={`AppLogo/${item?.AppIcon}`}
                                                    className={classNames(
                                                        item?.AppId ==
                                                            currentAppId
                                                            ? "text-yellow-400"
                                                            : "text-gray-400 group-hover:text-white",
                                                        "h-6 w-8"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <span>{item?.AppAbv}</span>
                                        </button>
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex flex-col flex-shrink-0 pb-5">
                            <a
                                href="https://support.gtls.com.au/help/2703577665"
                                target="_blank"
                                className="flex justify-center"
                            >
                                {" "}
                                <button
                                    className={classNames(
                                        "text-gray-400 hover:bg-gray-700 hover:text-white",
                                        "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                    )}
                                >
                                    {typeof SupportIcon === 'string' ? (
                                        <img className={classNames(
                                            "text-gray-400 group-hover:text-white",
                                            "h-6 w-6"
                                        )} src={SupportIcon} />
                                    )
                                    : (SupportIcon as ReactNode)
                                    }
                                    <span className="mt-2">Support</span>
                                </button>
                            </a>
                            <button onClick={handleLogout}>
                                <ResponsiveNavLink
                                    className="flex flex-col hover:bg-gray-900 hover:text-white"
                                >
                                    {typeof LogoutIcon === 'string' ? (
                                        <img className="w-7 ml-2 text-gray-400" src={LogoutIcon} />
                                    )
                                    : (LogoutIcon as ReactNode)
                                    }
                                    <span className="text-xs text-gray-400">
                                        LOGOUT
                                    </span>
                                </ResponsiveNavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-20 lg:hidden"
                    onClose={setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-1 right-0 -mr-14 p-1">
                                        <button
                                            type="button"
                                            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none "
                                            onClick={
                                                setMobileMenuOpen
                                            }
                                        >
                                            {typeof XMarkIcon === 'string' ? (
                                            <img className="h-6 w-6 text-white" src={XMarkIcon} />
                                            )
                                            : (XMarkIcon as ReactNode)
                                            }
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    {typeof gtlsLogo === 'string' ? (
                                        <img className="h-8 w-auto" src={gtlsLogo} alt="tiger" />
                                    ) : (
                                        <div className="h-8 w-auto">{gtlsLogo}</div>
                                    )}
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                    <nav className="flex h-full flex-col">
                                        <div className="space-y-1 ">
                                            {sidebarElements
                                                .map((
                                                    item
                                                    ) => (
                                                    <Accordion
                                                        //name={item?.name as String}
                                                        key={item?.id}
                                                        transition={{
                                                            duration: "300ms",
                                                            timingFunction:
                                                                "cubic-bezier(0, 0, 0.2, 1)",
                                                        }}
                                                    >
                                                        {item?.options ? (
                                                            <AccordionItem>
                                                                {({  }) => (
                                                                    <>
                                                                        <AccordionHeader
                                                                            onClick={handleMenuSide}
                                                                            className={classNames(
                                                                                item?.current
                                                                                    ? "bg-gray-700 text-white"
                                                                                    : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                                                "group py-2 px-3 rounded-md gap-x-2 text-sm font-medium w-full flex justify- items-center text-gray-600  p-4"
                                                                            )}
                                                                        >
                                                                            {item?.icon ? (
                                                                                <item.icon
                                                                                    className={classNames(
                                                                                        item?.current
                                                                                            ? "text-yellow-400"
                                                                                            : "text-gray-400 group-hover:text-white",
                                                                                        "h-6 w-6"
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            ) : (
                                                                                <img
                                                                                    src={
                                                                                        item?.img
                                                                                    }
                                                                                    className={classNames(
                                                                                        item?.current
                                                                                            ? "text-yellow-400"
                                                                                            : "text-gray-400 group-hover:text-white",
                                                                                        "h-6 w-6"
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            )}
                                                                            <span
                                                                                id={
                                                                                    item?.name
                                                                                }
                                                                            >
                                                                                {
                                                                                    item?.name
                                                                                }
                                                                            </span>
                                                                            {item?.options.length > 0 ? 
                                                                            typeof ChevronDownIcon === 'string' ? (
                                                                                <img className="h-3" src={ChevronDownIcon} alt="" />
                                                                            ) : (
                                                                                ChevronDownIcon as ReactElement<any, any>
                                                                            )
                                                                            : <></>}
                                                                            
                                                                        </AccordionHeader>
                                                                        {/* Mobile view  */}
                                                                        {item.options ? (
                                                                            <AccordionBody className="pl-8 flex flex-col">
                                                                                {item.options
                                                                                    .map(
                                                                                        (
                                                                                            option: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }
                                                                                        ) => (
                                                                                            <button
                                                                                                id={
                                                                                                    option.name? option?.name.toString() : ""
                                                                                                }
                                                                                                onClick={handleClickSide
                                                                                                }
                                                                                                className="p-5 font-light text-left text-white"
                                                                                            >
                                                                                                {
                                                                                                    option?.name
                                                                                                }
                                                                                            </button>
                                                                                        )
                                                                                    )}
                                                                            </AccordionBody>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                        ) : (
                                                            <a
                                                                href={item.href}
                                                                onClick={handleClick
                                                                }
                                                            >
                                                                <AccordionItem
                                                                    key={
                                                                        item.name? item?.name.toString() : ""
                                                                    }
                                                                >
                                                                    {({
                                                                        
                                                                    }) => (
                                                                        <>
                                                                            <AccordionHeader
                                                                                // className=" "
                                                                                className={classNames(
                                                                                    item?.current
                                                                                        ? "bg-gray-700 text-white"
                                                                                        : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                                                    "group py-2 px-3 rounded-md flex gap-x-2 items-center text-sm font-medium w-full text-gray-600  p-4"
                                                                                )}
                                                                            >
                                                                                {item.icon ? (
                                                                                    <item.icon
                                                                                        className={classNames(
                                                                                            item?.current
                                                                                                ? "text-yellow-400"
                                                                                                : "text-gray-400 group-hover:text-white",
                                                                                            "h-6 w-6"
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                ) : (
                                                                                    <img
                                                                                        src={
                                                                                            item?.img
                                                                                        }
                                                                                        className={classNames(
                                                                                            item?.current
                                                                                                ? "text-yellow-400"
                                                                                                : "text-gray-400 group-hover:text-white",
                                                                                            "h-6 w-6"
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                )}
                                                                                <span>
                                                                                    {
                                                                                        item?.name
                                                                                    }
                                                                                </span>
                                                                            </AccordionHeader>
                                                                            {item.options ? (
                                                                                <AccordionBody className="pl-8 flex flex-col">
                                                                                    {item.options.map(
                                                                                        (
                                                                                            option: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }
                                                                                        ) => (
                                                                                            <button
                                                                                                onClick={handleClickSide
                                                                                                }
                                                                                                className="p-5 font-light text-left text-white"
                                                                                            >
                                                                                                {
                                                                                                    option?.name
                                                                                                }
                                                                                            </button>
                                                                                        )
                                                                                    )}
                                                                                </AccordionBody>
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </AccordionItem>
                                                            </a>
                                                        )}
                                                    </Accordion>
                                                ))}
                                        </div>
                                    </nav>
                                </div>
                                <div className="flex flex-col flex-shrink-0 pb-5">
                                <a
                                    href="https://support.gtls.com.au/help/2703577665"
                                    target="_blank"
                                    className="flex"
                                >
                                    {" "}
                                    <button
                                        className={classNames(
                                            "text-gray-400 hover:bg-gray-700 hover:text-white",
                                            "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                        )}
                                    >
                                        {typeof SupportIcon === 'string' ? (
                                        <img className={classNames(
                                            "text-gray-400 group-hover:text-white",
                                            "h-6 w-6"
                                        )} src={SupportIcon} />
                                        )
                                        : (SupportIcon as ReactNode)
                                        }
                                        <span className="mt-2">Support</span>
                                    </button>
                                </a>
                                <button  onClick={handleLogout}>
                                    <ResponsiveNavLink
                                        className="flex flex-col hover:bg-gray-900 hover:text-white w-8 h-14"
                                    >
                                        {typeof LogoutIcon === 'string' ? (
                                        <img className={classNames(
                                            "text-gray-400 group-hover:text-white",
                                            "h-6 w-6"
                                        )} src={LogoutIcon} />
                                        )
                                        : (LogoutIcon as ReactNode)
                                        }
                                        
                                        <span className="text-xs text-gray-400">
                                            LOGOUT
                                        </span>
                                    </ResponsiveNavLink>
                                </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            {typeof SupportModal === 'string' ? (
                                        <img className={classNames(
                                            "text-gray-400 group-hover:text-white",
                                            "h-6 w-6"
                                        )} src={SupportModal} />
                                        )
                                        : (SupportModal as ReactNode)
                                        }
        </div>
    )
}