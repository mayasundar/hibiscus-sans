import footer from "./footer.module.css";
import Image from "next/image";

export function Footer(){
    return(

        <div>
            <div className={footer.textArea}>

                <div className={footer.details}>

                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Hh</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Ii</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Bb</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Ii</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Ss</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Cc</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Uu</div>
                    <div className={footer.glyphDetail} style={{ fontFamily: 'var(--font-hibiscus)' }}>Ss</div>

                </div>

                <div className={footer.footerLink}>
                    <a
                        href="https://mayasundar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        by Maya Sundar →
                    </a>

                </div>
            </div>

        </div>


    );
}

export default Footer;
