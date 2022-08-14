import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ItemMargin } from "./item-margin";

export interface BoxProps {
    iconPath: string;
    iconAlt: string;
    title: string;
    text: string;
    buttonLink: string;
    buttonText: string;
}

export const Box: React.FC<BoxProps> = ({ iconPath, iconAlt, title, text, buttonLink, buttonText }) => (
    <div className="flex flex-col w-80 h-72 items-center rounded-2xl bg-white">
        <div className="flex flex-col items-center">
            <ItemMargin>
                <Image src={iconPath} alt={iconAlt} width={32} height={32}/>
            </ItemMargin>
            <div className="mt-2.5">
                <h3 className="text-center text-xl">{title}</h3>
            </div>
        </div>
        <ItemMargin className="w-72">
            <p className="text-center">{text}</p>
        </ItemMargin>
        <ItemMargin>
            <Link href={buttonLink}>
                <div className="flex justify-center items-center w-52 h-10 rounded-3xl bg-grey cursor-pointer">
                    {buttonText}
                </div>
            </Link>
        </ItemMargin>
    </div>
);