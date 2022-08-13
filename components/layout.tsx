import { Navbar } from "./navbar";
import { Footer } from "./footer";
import React, { ReactElement } from "react";

export const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main className="w-full h-full">{children}</main>
            <Footer/>
        </>
    );
};