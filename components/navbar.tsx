import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const onLinkClick = () => setIsNavOpen(false);

    return (
        <header className="flex w-full">
            <section className="flex w-full pt-5 px-5 md:hidden">
                <div>
                    <Image src="/colabu-logo.png" alt="Colabu logo" width="120" height="25"/>
                </div>

                <div
                    className={`${isNavOpen ? "show-menu" : "hide-menu"} flex flex-col items-center justify-between min-h-[250px]`}
                >
                    <nav onClick={onLinkClick}>
                        <Link href="/">Domů</Link>
                    </nav>
                    <nav onClick={onLinkClick}>
                        <Link href="/product/product-buyer">Produkt</Link>
                    </nav>
                    <nav onClick={onLinkClick}>
                        <Link href="/#contact">Kontakt</Link>
                    </nav>
                    <nav
                        className="flex justify-center items-center w-52 h-10 rounded-3xl bg-blue text-white"
                        onClick={onLinkClick}
                    >
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
                        <nav>
                            <Link href="/">Domů</Link>
                        </nav>
                    </div>
                    <div className="mx-5">
                        <nav>
                            <Link href="/product/product-buyer">Produkt</Link>
                        </nav>
                    </div>
                    <div className="mx-5">
                        <nav>
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