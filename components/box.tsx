import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="mt-5">
                <Image src={iconPath} alt={iconAlt} width="32" height={32}/>
            </div>
            <div className="mt-2.5">
                <h3 className="text-center text-xl">{title}</h3>
            </div>
        </div>
        <div className="w-72 mt-5">
            <p className="text-center">{text}</p>
        </div>
        <div className="mt-5">
            <Link href={buttonLink}>
                <div className="flex justify-center items-center w-52 h-10 rounded-3xl bg-grey">
                    {buttonText}
                </div>
            </Link>
        </div>
    </div>
);