import React from "react";

export const ContactForm: React.FC = () => {
    return (
        <form className="w-full">
            <input
                type="email"
                placeholder="Email"
                className="w-full mt-2.5 p-2.5 rounded-3xl border-transparent focus:border-blue"
            />
            <input
                type="text"
                placeholder="Jméno a příjmení"
                className="w-full mt-2.5 p-2.5 rounded-3xl border-transparent focus:border-blue"
            />
            <input
                type="text"
                placeholder="Vaše zpráva..."
                className="w-full mt-2.5 px-2.5 h-24 rounded-3xl border-transparent focus:border-blue"
            />
            <input
                type="button"
                value="Odeslat"
                className="flex justify-center items-center w-full h-10 rounded-3xl bg-blue text-white mt-5 border-blue"
            />
        </form>
    );
};
