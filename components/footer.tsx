import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="w-full lg:flex lg:justify-around md:pb-5">
            <section className="flex w-full justify-center flex-col lg:flex-row lg:w-auto">
                <div className="flex justify-center items-center">
                    <Image src="/envelope.svg" alt="Envelope icon" width="24" height="24"/>
                    <div className="pl-3">
                        <a href="mailto:info@colabu.cz">info@colabu.cz</a>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5 lg:mt-0 lg:ml-5">
                    <Image src="/phone.svg" alt="Phone icon" width="24" height="24"/>
                    <div className="pl-3">
                        <a href="tel:735032820">+420 735 032 820</a>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5 lg:mt-0 lg:ml-5">
                    <Image src="/map-marker.svg" alt="Map marker icon" width="24" height="24"/>
                    <div className="pl-3">
                        <p>Mezírka 775/1, 602 00 Brno</p>
                    </div>
                </div>
            </section>

            <section className="flex w-full justify-center py-5 lg:py-0 lg:w-auto">
                <div className="mx-2.5">
                    <a href="https://www.facebook.com/ColabuCZ" target="_blank">
                        <Image src="/facebook.svg" alt="Facebook icon" width="24" height="24"/>
                    </a>
                </div>
                <div className="mx-2.5">
                    <a href="https://www.instagram.com/colabu.cz/" target="_blank">
                        <Image src="/instagram.svg" alt="Instagram icon" width="24" height="24"/>
                    </a>
                </div>
            </section>
        </footer>
    );
};