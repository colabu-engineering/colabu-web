import React from "react";
import Image from "next/image";

export interface ConsumerLogoProps {
    iconPath: string;
    iconAlt: string;
}

export const ConsumerLogo: React.FC<ConsumerLogoProps> = ({ iconPath, iconAlt }) => (
    <div>
        <Image src={iconPath} alt={iconAlt} width="80" height="80"/>
    </div>
);