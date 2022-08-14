import React from "react";
import Image from "next/image";
import { ItemMargin } from "./item-margin";

export interface ItemTutorialProps {
    title: string;
    iconPath: string;
    iconAlt: string;
    text: string;
}

export const ItemTutorial: React.FC<ItemTutorialProps> = ({ title, iconPath, iconAlt, text }) => (
    <div className="flex flex-col w-72 items-center bg-light-blue rounded-2xl">
        <div className="h-24">
            <div className="flex flex-col items-center">
                <ItemMargin>
                    <h3 className="text-center text-xl text-hover-blue">{title}</h3>
                </ItemMargin>
            </div>
            <Image src={iconPath} alt={iconAlt} width={210} height={100}/>
        </div>
        <div className="w-full h-36 flex items-center justify-center bg-white rounded-2xl">
            <div className="w-64 pt-5">
                <p className="text-center">{text}</p>
            </div>
        </div>
    </div>
);
