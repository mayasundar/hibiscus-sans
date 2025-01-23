import Image from "next/image";
import styles from "./page.module.css";
import Tester from "./tester";
import Glyphs from "./glyphs"
import Footer from "./footer"

export default function Home() {
  return (
      <div>
        <div className={styles.home}>
          <div className={styles.header}>
            <div className={styles.square}>
              <div className={styles.title}>
                <div className={styles.bigh1}>hibiscus sans</div>
                <div className={styles.subtitle}>
                  A playful sans serif with flared terminals & a handwritten feel.
                </div>
              </div>

              <Image  className={styles.img}
                      aria-hidden
                      src="/hibiscus.png"
                      alt="Hibiscus painting"
                      width={528}
                      height={396}
              />
            </div>
          </div>

          <div className={styles.about}>
            <div>
              <a
                  href="../../public/fonts/HibiscusSans-Regular.otf"
                  download="HibiscusSans-Regular.otf"
              >
                ↓ Download v1.001
              </a>
            </div>
            ✴
            <div>

              <a
                  href="https://mayasundar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                by Maya Sundar →
              </a>
            </div>
          </div>
        </div>

        <Tester/>
        <Glyphs/>
        <Footer/>

      </div>
  );
}
