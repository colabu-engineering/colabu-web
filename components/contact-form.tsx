import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const sendEmail = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("process.env.EMAIL_PUBLIC_KEY", process.env.EMAIL_PUBLIC_KEY);
        emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                form.current as HTMLFormElement,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
            )
            .then(() => {
                setIsEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    if (isEmailSent) {
        return (
            <p>Děkujeme! Vaše zpráva byla odeslána.</p>
        );
    }

    return (
        <form className="w-full" ref={form} onSubmit={sendEmail}>
            <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="w-full mt-2.5 p-2.5 rounded-3xl border-transparent focus:border-blue"
            />
            <input
                name="user_name"
                type="text"
                placeholder="Jméno a příjmení"
                className="w-full mt-2.5 p-2.5 rounded-3xl border-transparent focus:border-blue"
            />
            <textarea
                name="message"
                placeholder="Vaše zpráva..."
                className="w-full mt-2.5 px-2.5 h-24 rounded-3xl border-transparent focus:border-blue"
            />
            <input
                type="submit"
                value="Odeslat"
                className="flex justify-center items-center w-full h-10 rounded-3xl bg-blue text-white mt-5 border-blue cursor-pointer"
            />
        </form>
    );
};
