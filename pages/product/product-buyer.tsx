import { NextPage } from "next";
import { Button } from "../../components/button";
import Image from "next/image";
import { Box } from "../../components/box";
import { SectionWrapper } from "../../components/section-wrapper";
import { ItemWrapper } from "../../components/item-wrapper";
import { ItemMargin } from "../../components/item-margin";
import { SectionCustomers } from "../../components/section-customers";
import { ItemTutorial } from "../../components/item-tutorial";

const ProductBuyer: NextPage = () => {
    return (
        <>
            <SectionWrapper>
                <ItemWrapper>
                    <h1 className="text-center text-4xl">
                        Efektivní řešení <span className="text-blue">pro obchody</span>.
                    </h1>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <p className="text-center">
                        Vytvářejte objednávky a sledujte jejich stav na jednom místě.
                    </p>
                </ItemWrapper>
                <ItemMargin>
                    <Button text="Registrovat se jako obchod" link="http://live.colabu.cz/register"/>
                </ItemMargin>
                <ItemMargin className="lg:hidden">
                    <Image src="/buyer-image.png" alt="Buyer image" width="190" height="190"/>
                </ItemMargin>
                <ItemMargin className="hidden lg:block">
                    <Image src="/buyer-image.png" alt="Buyer image" width="256" height="256"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper className="bg-light-blue">
                <ItemWrapper>
                    <h2 className="text-center text-2xl">Jak to funguje?</h2>
                </ItemWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <ItemMargin className="mt-0 lg:mx-2.5">
                        <ItemTutorial
                            title="1."
                            iconPath="/buyer-tutorial-1.png"
                            iconAlt="Buyer tutorial image"
                            text="Zaregistrujete se do platformy Colabu."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mt-0 lg:mx-2.5 xl:mt-0">
                        <ItemTutorial
                            title="2."
                            iconPath="/buyer-tutorial-2.png"
                            iconAlt="Buyer tutorial image"
                            text="Vyberete dodavatele od kterého chcete objednat zboží."
                        />
                    </ItemMargin>
                    <ItemMargin className="xl:mt-0 lg:mx-2.5">
                        <ItemTutorial
                            title="3."
                            iconPath="/buyer-tutorial-3.png"
                            iconAlt="Buyer tutorial image"
                            text="Vyberete si požadované zboží, vložíte jej do košíku a vytvoříte objednávku."
                        />
                    </ItemMargin>
                    <ItemMargin className="xl:mt-0 lg:mx-2.5">
                        <ItemTutorial
                            title="4."
                            iconPath="/buyer-tutorial-4.png"
                            iconAlt="Buyer tutorial image"
                            text="Stav vaší objednávky můžete sledovat v detailu objednávky."
                        />
                    </ItemMargin>
                </div>

                <ItemMargin>
                    <Button text="Registrovat se jako obchod" link="http://live.colabu.cz/register"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper>
                <ItemWrapper>
                    <h2 className="text-center text-2xl">Proč používat Colabu?</h2>
                </ItemWrapper>
            </SectionWrapper>

            <SectionCustomers/>

            <SectionWrapper className="bg-blue">
                <ItemWrapper>
                    <h2 className="text-center text-2xl text-white">Colabu přináší řešení</h2>
                </ItemWrapper>
                <div className="flex flex-col items-center lg:flex-row">
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
        </>
    );
};

export default ProductBuyer;