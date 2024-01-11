import React, { ReactNode } from 'react';
type ResponsiveNavLinkProps = {
    active?: boolean;
    className?: string;
    children: ReactNode;
};
declare const ResponsiveNavLink: ({ active, className, children, ...props }: ResponsiveNavLinkProps) => React.JSX.Element;
export default ResponsiveNavLink;
