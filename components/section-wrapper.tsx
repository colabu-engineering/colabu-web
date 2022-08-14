import React, { ReactNode } from "react";

export interface SectionWrapperProps {
    className?: string;
    id?: string;
    children: ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id = "", className = "" }) => (
    <section id={id} className={`${className} flex flex-col items-center py-10`}>
        {children}
    </section>
);