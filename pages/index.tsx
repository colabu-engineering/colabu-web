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
                <div className="max-w-xs md:max-w-xl">
                    <h1 className="text-center text-4xl">
                        <span className="text-blue">Efektivní řešení</span> pro správu vašeho zboží.
                    </h1>
                </div>
                <div className="max-w-xs md:max-w-xl mt-5">
                    <p className="text-center">
                        Webová aplikace Colabu pomáhá zefektivnit proces objednávání zboží obchodníka od dodavatele.
                    </p>
                </div>
                <div className="mt-5">
                    <Button text="Začít spolupracovat" link="mailto:info@colabu.cz"/>
                </div>
                <div className="mt-5 lg:hidden">
                    <Image src="/product-mobile.png" alt="Product showcase" width="300" height="180"/>
                </div>
                <div className="mt-5 hidden lg:block">
                    <Image src="/product-mobile.png" alt="Product showcase" width="630" height="420"/>
                </div>
            </section>

            <section className="flex flex-col items-center bg-white py-10">
                <div className="max-w-xs md:max-w-2xl lg:hidden">
                    <h2 className="text-center text-2xl">Přehlednost a efektivita procesu při objednávání zboží.</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-start">

                    <div className="mt-5 lg:hidden">
                        <Image src="/comparison.png" alt="Comparison image" width="280" height="160"/>
                    </div>
                    <div className="hidden lg:block lg:mr-10">
                        <Image src="/comparison.png" alt="Comparison image" width="467" height="265"/>
                    </div>
                    <div className="max-w-xs md:max-w-xl lg:ml-10">
                        <div className="hidden lg:block">
                            <h2 className="text-center text-2xl lg:text-left">
                                Přehlednost a efektivita procesu při objednávání zboží.
                            </h2>
                        </div>
                        <div className="mt-5">
                            <p className="text-center lg:text-left">
                                Obchodník a dodavatel používají častokrát neefektivní způsoby, jak vzájemně
                                spolupracovat.
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="text-center lg:text-left">
                                Colabu pomocí moderních technologií pomáhá celý proces objednávání zboží zefektivnit a
                                mít tak celý proces pod kontrolou.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-blue py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl text-white">Colabu přináší řešení</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="mt-5 lg:mx-2.5">
                        <Box
                            iconPath="/buyer-icon.png"
                            iconAlt="Shop icon"
                            title="Obchod"
                            text="Řešení pro majitele obchodů, kteří chtějí šetřit náklady, zvýšit efektivitu a přehlednost v objednávání zboží."
                            buttonLink="/product/product-buyer"
                            buttonText="Dozvědět se více"
                        />
                    </div>
                    <div className="mt-5 lg:mx-2.5">
                        <Box
                            iconPath="/supplier-icon.png"
                            iconAlt="supplier icon"
                            title="Dodavatel"
                            text="Řešení pro dodavatele, kteří chtějí jednoduše měnit svoji nabídku a mít přehled o stavu přijatých objednávek."
                            buttonLink="/product/product-supplier"
                            buttonText="Dozvědět se více"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl">Spolupracují s námi</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="mt-5 lg:mx-2.5">
                        <ConsumerLogo
                            iconPath="/no-sacek-logo.png"
                            iconAlt="Nosacek logo"
                        />
                    </div>
                    <div className="mt-5 lg:mx-2.5">
                        <ConsumerLogo
                            iconPath="/janek-logo.png"
                            iconAlt="Čokoládovna Janek logo"
                        />
                    </div>
                    <div className="mt-5 lg:mx-2.5">
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

            <section
                className="flex flex-col items-center bg-dark-blue py-10 lg:flex-row lg:justify-center lg:items-start">
                <div className="lg:mr-10">
                    <div className="max-w-xs mt-5 md:max-w-xl lg:mt-0">
                        <h2 className="text-center text-2xl text-white lg:text-left">Kdo stojí za Colabu?</h2>
                    </div>
                    <div className="max-w-xs mt-5 md:max-w-xl">
                        <p className="text-center text-white lg:text-left">
                            Jsme parta nadšených lidí, které baví řešit zajímavé a složité problémy a vždy jsme měli
                            chuť tvořit vlastní věci, a proto jsme se rozhodli založit Colabu. Náš tým se skládá z lidí,
                            kteří jsou odborníci na různé oblasti v rámci informačních technologií a díky naší expertíze
                            nabízíme obchodům i dodavatelům cenný nástroj, který jim dokáže pomoct v jejich podnikání.
                        </p>
                    </div>
                </div>
                <div className="mt-5 lg:mt-0 lg:ml-10">
                    <Image src="/team.png" alt="Team photo" width="240" height="228"/>
                </div>
            </section>

            <section id="contact" className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl">Napíšte nám</h2>
                </div>
                <div className="max-w-xs md:max-w-xl">
                    <p className="text-center">Máte nějaké otázky? Rádi vám vše zodpovíme!</p>
                </div>
                <div className="max-w-xs mt-5 md:max-w-xl">
                    <ContactForm/>
                </div>
            </section>
        </>
    );
};

export default Home;
