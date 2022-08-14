import { NextPage } from "next";
import { Button } from "../../components/button";
import Image from "next/image";
import { Box } from "../../components/box";
import { SectionWrapper } from "../../components/section-wrapper";
import { ItemWrapper } from "../../components/item-wrapper";
import { ItemMargin } from "../../components/item-margin";
import { SectionCustomers } from "../../components/section-customers";

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

            <SectionWrapper className="bg-white">
                <ItemWrapper>
                    <h2 className="text-center text-2xl">Jak to funguje?</h2>
                </ItemWrapper>
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