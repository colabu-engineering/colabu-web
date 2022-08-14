import React, { ReactNode } from "react";

export interface ItemMarginProps {
    className?: string;
    children: ReactNode;
}

export const ItemMargin: React.FC<ItemMarginProps> = ({ children, className = "" }) => (
    <div className={`${className} mt-5`}>
        {children}
    </div>
);
