import { NextPage } from "next";
import { Button } from "../../components/button";
import Image from "next/image";
import { Box } from "../../components/box";
import { SectionWrapper } from "../../components/section-wrapper";
import { ItemWrapper } from "../../components/item-wrapper";
import { ItemMargin } from "../../components/item-margin";
import { SectionCustomers } from "../../components/section-customers";
import { ItemTutorial } from "../../components/item-tutorial";
import { ItemFeature } from "../../components/item-feature";

const ProductSupplier: NextPage = () => {
    return (
        <>
            <SectionWrapper>
                <ItemWrapper>
                    <h1 className="text-center font-sans-medium text-4xl">
                        Efektivní řešení <span className="text-blue">pro dodavatele</span>.
                    </h1>
                </ItemWrapper>
                <ItemWrapper className="mt-5">
                    <p className="text-center">
                        Získejte nové zákazníky a správu vašich produktů z jednoho místa díky modernímu nástroji Colabu.
                    </p>
                </ItemWrapper>
                <ItemMargin>
                    <Button text="Registrovat se jako dodavatel" link="http://live.colabu.cz/register"/>
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
                    <h2 className="text-center font-sans-medium text-2xl">Jak to funguje?</h2>
                </ItemWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
                    <ItemMargin className="lg:mx-2.5">
                        <ItemTutorial
                            title="1."
                            iconPath="/supplier-tutorial-1.png"
                            iconAlt="Supplier tutorial image"
                            text="Zaregistrujete se do platformy Colabu."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemTutorial
                            title="2."
                            iconPath="/supplier-tutorial-2.png"
                            iconAlt="Supplier tutorial image"
                            text="V editoru produktů přidáte všechny produkty a rozdělíte do vytvořených kategorií."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemTutorial
                            title="3."
                            iconPath="/supplier-tutorial-3.png"
                            iconAlt="Supplier tutorial image"
                            text="Obchod od vás objednává zboží."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemTutorial
                            title="4."
                            iconPath="/supplier-tutorial-4.png"
                            iconAlt="Supplier tutorial image"
                            text="Přijímáte, monitoruje a odbavujete objednávky."
                        />
                    </ItemMargin>
                </div>

                <ItemMargin>
                    <Button text="Registrovat se jako dodavatel" link="http://live.colabu.cz/register"/>
                </ItemMargin>
            </SectionWrapper>

            <SectionWrapper>
                <ItemWrapper>
                    <h2 className="text-center font-sans-medium text-2xl">Proč používat Colabu?</h2>
                </ItemWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Prodej zboží"
                            iconPath="/supplier-feature-1.png"
                            iconAlt="Buyer feature icon"
                            text="Používáním Colabu mají obchody možnost snadno objevit vás a vaši aktuální nabídku. Díky dalšímu prodejnímu kanálu tak dokážete zvýšit své prodeje."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Noví zákazníci"
                            iconPath="/supplier-feature-2.png"
                            iconAlt="Buyer feature icon"
                            text="Nové zákazníky potřebuje každý úspěšný podnik a díky propojení obchodu a dodavatele je dokážete získat. Obchody vás totiž najdou v části dodavatelů."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Editor produktů"
                            iconPath="/supplier-feature-3.png"
                            iconAlt="Buyer feature icon"
                            text="Prostřednictvím editoru produktů lze jednoduše přidat, upravit nebo odstranit produkty které máte v nabídce."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Informace pro obchody"
                            iconPath="/supplier-feature-4.png"
                            iconAlt="Buyer feature icon"
                            text="V Colabu můžete poskytnout důležité informace pro obchody jako je minimální objednávka nebo závozové dny. Díky tomu je pro obchody jednodušší od vás nakupovat."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Monitorování objednávek"
                            iconPath="/supplier-feature-5.png"
                            iconAlt="Buyer feature icon"
                            text="Dodavatel v Colabu má možnost monitorovat stav všech přijatých objednávek a tím zvýšit přehlednost v jejich vyřizování."
                        />
                    </ItemMargin>
                    <ItemMargin className="lg:mx-2.5">
                        <ItemFeature
                            title="Kategorizace produktů"
                            iconPath="/supplier-feature-6.png"
                            iconAlt="Buyer feature icon"
                            text="V rámci našeho editoru dokážete kategorizovat své produkty a díky tomu získáte větší přehled ve svém zboží."
                        />
                    </ItemMargin>
                </div>
            </SectionWrapper>

            <SectionCustomers/>

            <SectionWrapper className="colabu-linear-gradient bg-blue">
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