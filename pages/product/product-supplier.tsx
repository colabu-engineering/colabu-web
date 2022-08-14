import { NextPage } from "next";
import { Button } from "../../components/button";
import Image from "next/image";
import { Box } from "../../components/box";
import { SectionWrapper } from "../../components/section-wrapper";
import { ItemWrapper } from "../../components/item-wrapper";
import { ItemMargin } from "../../components/item-margin";
import { SectionCustomers } from "../../components/section-customers";

const ProductSupplier: NextPage = () => {
    return (
        <>
            <SectionWrapper>
                <ItemWrapper>
                    <h1 className="text-center text-4xl">
                        Efektivní řešení <span className="text-blue">pro dodavatele</span>.
                    </h1>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <p className="text-center">
                        Získejte nové zákazníky a správu vašich produktů z jednoho místa díky modernímu nástroji Colabu.
                    </p>
                </ItemWrapper>
                <ItemMargin>
                    <Button text="Registrovat se jako obchod" link="http://live.colabu.cz/register"/>
                </ItemMargin>
                <ItemMargin className="lg:hidden">
                    <Image src="/supplier-image.png" alt="Supplier image" width="190" height="190"/>
                </ItemMargin>
                <ItemMargin className="hidden lg:block">
                    <Image src="/supplier-image.png" alt="Supplier image" width="256" height="256"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <ItemWrapper>
                    <h2 className="text-center text-2xl">Jak to funguje?</h2>
                </ItemWrapper>
                <ItemMargin>
                    <Button text="Registrovat se jako dodavatel" link="http://live.colabu.cz/register"/>
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
                            iconPath="/buyer-icon.png"
                            iconAlt="Shop icon"
                            title="Obchod"
                            text="Řešení pro majitele obchodů, kteří chtějí šetřit náklady, zvýšit efektivitu a přehlednost v objednávání zboží."
                            buttonLink="/product/product-buyer"
                            buttonText="Dozvědět se více"
                        />
                    </ItemMargin>
                </div>
            </SectionWrapper>
        </>
    );
};

export default ProductSupplier;