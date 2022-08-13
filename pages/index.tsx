import type { NextPage } from "next";
import { Button } from "../components/button";
import Image from "next/image";
import { Box } from "../components/box";
import { ConsumerLogo } from "../components/consumer-logo";
import { ContactForm } from "../components/contact-form";

const Home: NextPage = () => {
    return (
        <>
            <section className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h1 className="text-center text-4xl">
                        <span className="text-blue">Efektivní řešení</span> pro správu vašeho zboží.
                    </h1>
                </div>
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mt-5">
                    <p className="text-center">
                        Webová aplikace Colabu pomáhá zefektivnit proces objednávání zboží obchodníka od dodavatele.
                    </p>
                </div>
                <div className="mt-5">
                    <Button text="Začít spolupracovat" link="mailto:info@colabu.cz"/>
                </div>
                <div className="mt-5">
                    <Image src="/product-mobile.png" alt="Product showcase" width="300" height="180"/>
                </div>
            </section>

            <section className="flex flex-col items-center bg-white py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h2 className="text-center text-2xl">Přehlednost a efektivita procesu při objednávání zboží.</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="mt-5 lg:hidden">
                        <Image src="/comparison.png" alt="Comparison image" width="280" height="160"/>
                    </div>
                    <div className="mt-5 hidden lg:block">
                        <Image src="/comparison.png" alt="Comparison image" width="467" height="265"/>
                    </div>
                    <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                        <div className="mt-5">
                            <p className="text-center">
                                Obchodník a dodavatel používají častokrát neefektivní způsoby, jak vzájemně
                                spolupracovat.
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="text-center">
                                Colabu pomocí moderních technologií pomáhá celý proces objednávání zboží zefektivnit a
                                mít tak celý proces pod kontrolou.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-blue py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h2 className="text-center text-2xl text-white">Colabu přináší řešení</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="mt-5 lg:mx-2.5">
                        <Box
                            iconPath="/shop-icon.png"
                            iconAlt="Shop icon"
                            title="Obchod"
                            text="Řešení pro majitele obchodů, kteří chtějí šetřit náklady, zvýšit efektivitu a přehlednost v objednávání zboží."
                            buttonLink="/product-shop"
                            buttonText="Dozvědět se více"
                        />
                    </div>
                    <div className="mt-5 lg:mx-2.5">
                        <Box
                            iconPath="/supplier-icon.png"
                            iconAlt="supplier icon"
                            title="Dodavatel"
                            text="Řešení pro dodavatele, kteří chtějí jednoduše měnit svoji nabídku a mít přehled o stavu přijatých objednávek."
                            buttonLink="/product-supplier"
                            buttonText="Dozvědět se více"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h2 className="text-center text-2xl">Spolupracují s námi</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="mt-5">
                        <ConsumerLogo
                            iconPath="/no-sacek-logo.png"
                            iconAlt="Nosacek logo"
                        />
                    </div>
                    <div className="mt-5">
                        <ConsumerLogo
                            iconPath="/janek-logo.png"
                            iconAlt="Čokoládovna Janek logo"
                        />
                    </div>
                    <div className="mt-5">
                        <ConsumerLogo
                            iconPath="/nasypsi-logo.png"
                            iconAlt="Nasypsi logo"
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <Button text="Začít spolupracovat" link="mailto:info@colabu.cz"/>
                </div>
            </section>

            <section className="flex flex-col items-center bg-dark-blue py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h2 className="text-center text-2xl text-white">Kdo stojí za Colabu?</h2>
                </div>
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mt-5">
                    <p className="text-center text-white">
                        Jsme parta nadšených lidí, které baví řešit zajímavé a složité problémy. Náš tým se skládá z
                        lidí, kteří jsou odborníci na různé oblasti v rámci informačních technologií.
                    </p>
                </div>
                <div className="mt-5">
                    <Image src="/team.png" alt="Team photo" width="240" height="228"/>
                </div>
            </section>

            <section className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                    <h2 className="text-center text-2xl">Napíšte nám</h2>
                </div>
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mt-5">
                    <p className="text-center">Máte nějaké otázky? Rádi vám vše zodpovíme!</p>
                </div>
                <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mt-5">
                    <ContactForm/>
                </div>
            </section>
        </>
    );
};

export default Home;
