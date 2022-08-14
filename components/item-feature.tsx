import React, { useState } from "react";
import Image from "next/image";

export interface ItemFeatureProps {
    title: string;
    iconPath: string;
    iconAlt: string;
    text: string;
}

export const ItemFeature: React.FC<ItemFeatureProps> = ({ title, iconPath, iconAlt, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-80 rounded-2xl bg-white">
            <div className="flex justify-between">
                <div
                    className="flex max-w-[140px] cursor-pointer items-center ml-5 lg:cursor-auto"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className={`${isOpen ? 'rotate-90 mt-1' : ''} mr-2.5 transition lg:hidden`}>
                        <Image src="/arrow.png" alt="Icon arrow" width={7} height={10}/>
                    </div>
                    <div className="lg:pt-24">
                        <h3 className="text-xl">{title}</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center w-24 h-24 bg-blue/10 rounded-2xl lg:rounded-tl-none lg:rounded-br-none">
                    <Image src={iconPath} alt={iconAlt} width={32} height={32}/>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} p-5 lg:block lg:h-52`}>
                <p className="text-center lg:text-left">{text}</p>
            </div>
        </div>
    );
};
