import React from "react";

export interface ButtonProps {
    text: string;
    link: string;
}

export const Button: React.FC<ButtonProps> = ({ text, link }) => (
    <a
        className="flex justify-center items-center w-64 h-12 rounded-3xl bg-blue text-white"
        href={link}
    >
        <span>{text}</span>
    </a>
);