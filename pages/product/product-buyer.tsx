import { NextPage } from "next";
import { Button } from "../../components/button";
import Image from "next/image";
import { Box } from "../../components/box";
import { ConsumerLogo } from "../../components/consumer-logo";

const ProductBuyer: NextPage = () => {
    return (
        <>
            <section className="flex flex-col items-center py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h1 className="text-center text-4xl">
                        Efektivní řešení <span className="text-blue">pro obchody</span>.
                    </h1>
                </div>
                <div className="max-w-xs md:max-w-xl mt-5">
                    <p className="text-center">
                        Vytvářejte objednávky a sledujte jejich stav na jednom místě.
                    </p>
                </div>
                <div className="mt-5">
                    <Button text="Registrovat se jako obchod" link="http://live.colabu.cz/register"/>
                </div>
                <div className="mt-5 lg:hidden">
                    <Image src="/buyer-image.png" alt="Buyer image" width="190" height="190"/>
                </div>
                <div className="mt-5 hidden lg:block">
                    <Image src="/buyer-image.png" alt="Buyer image" width="256" height="256"/>
                </div>
            </section>

            <section className="flex flex-col items-center bg-white py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl">Jak to funguje?</h2>
                </div>
                <div className="mt-5">
                    <Button text="Registrovat se jako obchod" link="http://live.colabu.cz/register"/>
                </div>
            </section>

            <section className="flex flex-col items-center bg-white py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl">Proč používat Colabu?</h2>
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

            <section className="flex flex-col items-center bg-blue py-10">
                <div className="max-w-xs md:max-w-xl">
                    <h2 className="text-center text-2xl text-white">Colabu přináší řešení</h2>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
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
        </>
    )
}

export default ProductBuyer;