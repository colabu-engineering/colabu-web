import React, { ReactNode } from "react";

export interface ItemWrapperProps {
    className?: string;
    children: ReactNode;
}

export const ItemWrapper: React.FC<ItemWrapperProps> = ({ children, className = "" }) => (
    <div className={`${className} max-w-xs md:max-w-xl`}>
        {children}
    </div>
);
