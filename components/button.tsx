import React from "react";

export interface ButtonProps {
    text: string;
    link: string;
}

export const Button: React.FC<ButtonProps> = ({ text, link }) => (
    <a
        className=""
        href={link}
    >
        {text}
    </a>
);