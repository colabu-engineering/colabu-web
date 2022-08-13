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
    <div>
        <Image src={iconPath} alt={iconAlt} width="32" height={32}/>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={buttonLink}>{buttonText}</Link>
    </div>
);