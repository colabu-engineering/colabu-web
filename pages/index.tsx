import type { NextPage } from "next";
import { Button } from "../components/button";
import Image from "next/image";
import { Box } from "../components/box";
import { ContactForm } from "../components/contact-form";
import { SectionWrapper } from "../components/section-wrapper";
import { ItemWrapper } from "../components/item-wrapper";
import { ItemMargin } from "../components/item-margin";
import { SectionCustomers } from "../components/section-customers";

const Home: NextPage = () => {
    return (
        <>
            <SectionWrapper className="bg-vector-1 bg-no-repeat bg-left-5 bg-contain md:bg-65%">
                <ItemWrapper className="mt-20 md:mt-28">
                    <h1 className="text-center font-sans-medium text-4xl">
                        <span className="text-blue">Efektivní řešení</span> pro správu vašeho zboží.
                    </h1>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <p className="text-center">
                        Webová aplikace Colabu pomáhá zefektivnit proces objednávání zboží obchodníka od dodavatele.
                    </p>
                </ItemWrapper>
                <ItemMargin>
                    <Button text="Začít spolupracovat" link="mailto:podpora@colabu.cz"/>
                </ItemMargin>
                <ItemMargin className="lg:hidden mt-10">
                    <Image src="/product.png" alt="Product showcase" width="300" height="180"/>
                </ItemMargin>
                {/*For unknown reason, I had to add rounded to both ItemMargin and Image components*/}
                <ItemMargin className="hidden lg:block shadow rounded-2xl mt-10">
                    <Image src="/product.png" alt="Product showcase" width="630" height="350" className="rounded-2xl"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper>
                <ItemWrapper className="lg:hidden">
                    <h2 className="text-center font-sans-medium text-2xl">Přehlednost a efektivita procesu při
                        objednávání zboží.</h2>
                </ItemWrapper>

                <div className="flex flex-col items-center lg:flex-row lg:items-start">
                    <ItemMargin className="lg:hidden">
                        <Image src="/comparison.png" alt="Comparison image" width="280" height="130"/>
                    </ItemMargin>

                    <div className="hidden lg:block lg:mr-10">
                        <Image src="/comparison.png" alt="Comparison image" width="467" height="220"/>
                    </div>

                    <ItemWrapper className="lg:ml-10">
                        <div className="hidden lg:block">
                            <h2 className="text-center font-sans-medium text-2xl lg:text-left">
                                Přehlednost a efektivita procesu při objednávání zboží.
                            </h2>
                        </div>

                        <ItemMargin>
                            <p className="text-center lg:text-left">
                                Obchodník a dodavatel používají častokrát neefektivní způsoby, jak vzájemně
                                spolupracovat.
                            </p>
                        </ItemMargin>

                        <ItemMargin>
                            <p className="text-center lg:text-left">
                                Colabu pomocí moderních technologií pomáhá celý proces objednávání zboží zefektivnit a
                                mít tak celý proces pod kontrolou.
                            </p>
                        </ItemMargin>
                    </ItemWrapper>
                </div>
            </SectionWrapper>

            <SectionWrapper className="colabu-linear-gradient bg-blue">
                <ItemWrapper>
                    <h2 className="text-center font-sans-medium text-2xl text-white lg:text-black">Colabu přináší řešení</h2>
                </ItemWrapper>
                <div className="flex flex-col items-center lg:flex-row">
                    <ItemMargin className="lg:mx-2.5">
                        <Box
                            iconPath="/buyer-icon.png"
                            iconAlt="Shop icon"
                            title="Obchod"
                            text="Řešení pro majitele obchodů, kteří chtějí šetřit náklady, zvýšit efektivitu a přehlednost v objednávání zboží."
                            buttonLink="/product/product-buyer"
                            buttonText="Dozvědět se více"
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <Box
                            iconPath="/supplier-icon.png"
                            iconAlt="supplier icon"
                            title="Dodavatel"
                            text="Řešení pro dodavatele, kteří chtějí jednoduše měnit svoji nabídku a mít přehled o stavu přijatých objednávek."
                            buttonLink="/product/product-supplier"
                            buttonText="Dozvědět se více"
                        />
                    </ItemMargin>
                </div>
            </SectionWrapper>

            <SectionCustomers/>

            <SectionWrapper className="bg-dark-blue lg:flex-row lg:justify-center lg:items-start">
                <div className="lg:mr-10">
                    <ItemWrapper className="mt-5 lg:mt-0">
                        <h2 className="text-center font-sans-medium text-2xl text-white lg:text-left">Kdo stojí za
                            Colabu?</h2>
                    </ItemWrapper>
                    <ItemWrapper className="mt-5">
                        <p className="text-center text-white lg:text-left">
                            Jsme parta nadšených lidí, které baví řešit zajímavé a složité problémy a vždy jsme měli
                            chuť tvořit vlastní věci, a proto jsme se rozhodli založit Colabu. Náš tým se skládá z
                            lidí,
                            kteří jsou odborníci na různé oblasti v rámci informačních technologií a díky naší
                            expertíze
                            nabízíme obchodům i dodavatelům cenný nástroj, který jim dokáže pomoct v jejich
                            podnikání.
                        </p>
                    </ItemWrapper>
                </div>
                <ItemMargin className="lg:mt-0 lg:ml-10">
                    <Image src="/team.png" alt="Team photo" width="240" height="228"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper id="contact">
                <ItemWrapper>
                    <h2 className="text-center font-sans-medium text-2xl">Napíšte nám</h2>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <p className="text-center">Máte nějaké otázky? Rádi vám vše zodpovíme!</p>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <ContactForm/>
                </ItemWrapper>
            </SectionWrapper>
        </>
    );
};

export default Home;
