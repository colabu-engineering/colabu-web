import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const onMobileLinkClick = () => setIsNavOpen(false);
    const onDesktopLinkClick = () => setIsDropdownOpen(false);

    return (
        <header className="flex w-full">
            <section className="flex w-full pt-5 px-5 md:hidden">
                <div className="z-30">
                    <Image src="/colabu-logo.png" alt="Colabu logo" width="120" height="25"/>
                </div>

                <div
                    className={`${isNavOpen ? "show-menu" : "hide-menu"} flex flex-col items-center justify-between min-h-[250px]`}
                >
                    <nav onClick={onMobileLinkClick}>
                        <Link href="/">Domů</Link>
                    </nav>
                    <nav onClick={onMobileLinkClick}>
                        <Link href="/product/product-buyer">Pro obchod</Link>
                    </nav>
                    <nav onClick={onMobileLinkClick}>
                        <Link href="/product/product-supplier">Pro dodavatele</Link>
                    </nav>
                    <nav onClick={onMobileLinkClick}>
                        <Link href="/#contact">Kontakt</Link>
                    </nav>
                    <nav className="flex justify-center items-center w-52 h-10 rounded-3xl bg-blue text-white">
                        <Link href="http://live.colabu.cz/register">Registrovat se</Link>
                    </nav>
                </div>

                <div className="flex w-full justify-end">
                    <div
                        className={`${isNavOpen ? "hidden" : ""} space-y-1`}
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-6 bg-blue"/>
                        <span className="block h-0.5 w-6 bg-blue"/>
                        <span className="block h-0.5 w-6 bg-blue"/>
                    </div>

                    <div
                        className={`${isNavOpen ? "" : "hidden"} fixed z-20`}
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <svg
                            className="h-8 w-8 text-blue"
                            viewBox="0 5 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                </div>
            </section>

            <section className="hidden md:flex md:w-full md:justify-between md:px-20 md:pt-5">
                <div className="flex items-center">
                    <Image src="/colabu-logo.png" alt="Colabu logo" width="120" height="25"/>
                </div>

                <div className="flex items-center">
                    <div className="mx-5">
                        <nav onClick={onDesktopLinkClick}>
                            <Link href="/">Domů</Link>
                        </nav>
                    </div>
                    <div className="mx-5 relative">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            <span>Produkt</span>
                            <div className={`${isDropdownOpen ? "rotate-90" : ""} ml-2.5 transition flex`}>
                                <Image src="/arrow.png" alt="Icon arrow" width={7} height={10}/>
                            </div>
                        </div>
                        <div
                            className={`${isDropdownOpen ? "flex" : "hidden"} w-36 h-20 bg-white rounded-2xl shadow absolute top-8 right-0 flex-col justify-center items-center`}>
                            <div className="text-left h-full flex flex-col justify-around py-2">
                                <nav onClick={onDesktopLinkClick}>
                                    <Link href="/product/product-buyer">Pro obchod</Link>
                                </nav>
                                <nav onClick={onDesktopLinkClick}>
                                    <Link href="/product/product-supplier">Pro dodavatele</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5">
                        <nav onClick={onDesktopLinkClick}>
                            <Link href="/#contact">Kontakt</Link>
                        </nav>
                    </div>
                    <div className="ml-5">
                        <nav className="flex justify-center items-center w-52 h-10 rounded-3xl bg-blue text-white">
                            <Link href="http://live.colabu.cz/register">Registrovat se</Link>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    );
};