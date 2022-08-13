import Image from "next/image";

export const Footer = () => {
    return (
        <footer>
            <section className="flex w-full justify-center flex-col">
                <div className="flex justify-center">
                    <Image src="/envelope.svg" alt="Envelope icon" width="24" height="24"/>
                    <a href="mailto:info@colabu.cz" className="pl-3">info@colabu.cz</a>
                </div>
                <div className="flex justify-center mt-5">
                    <Image src="/phone.svg" alt="Phone icon" width="24" height="24"/>
                    <a href="tel:735032820" className="pl-3">+420 735 032 820</a>
                </div>
                <div className="flex justify-center mt-5">
                    <Image src="/map-marker.svg" alt="Map marker icon" width="24" height="24"/>
                    <p className="pl-3">Mezírka 775/1, 602 00 Brno</p>
                </div>
            </section>

            <section className="flex w-full justify-center py-5">
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