import type { NextPage } from "next";
import { Button } from "../components/button";
import Image from "next/image";
import { Box } from "../components/box";
import { ConsumerLogo } from "../components/consumer-logo";

const Home: NextPage = () => {
    return (
        <>
            <section>
                <h1>Efektivní řešení pro správu Vašeho zboží.</h1>
                <p>Webová aplikace Colabu pomáhá zefektivnit proces objednávání zboží obchodníka od dodavatele.</p>
                <Button text="Začít spolupracovat" link="mailto:info@colabu.cz"/>
                <Image src="/product.png" alt="Product showcase" width="300" height="180"/>
            </section>

            <section>
                <h1>Přehlednost a efektivita procesu při objednávání zboží.</h1>
                <Image src="/comparison.png" alt="Comparison image" width="280" height="160"/>
                <p>Obchodník a dodavatel používají častokrát neefektivní způsoby, jak vzájemně spolupracovat. Colabu
                    pomocí moderních technologií pomáhá celý proces objednávání zboží zefektivnit a mít tak celý proces
                    pod kontrolou.</p>
            </section>

            <section>
                <h1>Colabu přináší řešení</h1>
                <Box
                    iconPath="/shop-icon.png"
                    iconAlt="Shop icon"
                    title="Obchod"
                    text="Řešení pro majitele obchodů, kteří chtějí šetřit náklady, zvýšit efektivitu a přehlednost v objednávání zboží."
                    buttonLink="/product-shop"
                    buttonText="Dozvědět se více"
                />
                <Box
                    iconPath="/supplier-icon.png"
                    iconAlt="supplier icon"
                    title="Dodavatel"
                    text="Řešení pro dodavatele, kteří chtějí jednoduše měnit svoji nabídku a mít přehled o stavu přijatých objednávek."
                    buttonLink="/product-supplier"
                    buttonText="Dozvědět se více"
                />
            </section>

            <section>
                <h1>Spolupracují s námi</h1>
                <ConsumerLogo
                    iconPath="/no-sacek-logo.png"
                    iconAlt="Nosacek logo"
                />
                <ConsumerLogo
                    iconPath="/janek-logo.png"
                    iconAlt="Čokoládovna Janek logo"
                />
                <ConsumerLogo
                    iconPath="/nasypsi-logo.png"
                    iconAlt="Nasypsi logo"
                />
                <Button text="Začít spolupracovat" link="mailto:info@colabu.cz"/>
            </section>

            <section>
                <h1>Kdo stojí za Colabu?</h1>
                <p>Jsme parta nadšených lidí, které baví řešit zajímavé a složité problémy. Náš tým se skládá z lidí,
                    kteří jsou odborníci na různé oblasti v rámci informačních technologií.</p>
                <Image src="/team.png" alt="Team photo" width="240" height="228"/>
            </section>

            <section>
                <h1>Napíšte nám</h1>
                <p>Máte nějaké otázky? Rádi vám vše zodpovíme!</p>
            </section>
        </>
    );
};

export default Home;
