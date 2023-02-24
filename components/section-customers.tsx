import React from "react";
import { ItemWrapper } from "./item-wrapper";
import { ItemMargin } from "./item-margin";
import { CustomerLogo } from "./customer-logo";
import { Button } from "./button";
import { SectionWrapper } from "./section-wrapper";

export const SectionCustomers: React.FC = () => (
    <SectionWrapper>
        <ItemWrapper>
            <h2 className="text-center text-2xl">Spolupracují s námi</h2>
        </ItemWrapper>
        <div className="grid grid-cols-1 xl:grid-cols-3">
            <ItemMargin className="lg:mx-2.5">
                <CustomerLogo
                    iconPath="/no-sacek-logo.png"
                    iconAlt="Nosacek logo"
                />
            </ItemMargin>
            <ItemMargin className="lg:mx-2.5">
                <CustomerLogo
                    iconPath="/janek-logo.png"
                    iconAlt="Čokoládovna Janek logo"
                />
            </ItemMargin>
            <ItemMargin className="lg:mx-2.5">
                <CustomerLogo
                    iconPath="/nasypsi-logo.png"
                    iconAlt="Nasypsi logo"
                />
            </ItemMargin>
        </div>
        <ItemMargin>
            <Button text="Začít spolupracovat" link="mailto:podpora@colabu.cz"/>
        </ItemMargin>
    </SectionWrapper>
);