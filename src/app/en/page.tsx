import styles from "../page.module.css";
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  AmgLogo,
  HabitatLogo,
  BikemapLogo,
  CoverImage,
  Map,
} from "../../images";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Logo />
        </h1>
        <a href="/" className={styles.header__changeLanguage}>
          🇮🇹
        </a>
      </header>
      <section className={styles.coverImage}>
        <p className={styles.heroDescription}>
          Hippo is an unsupported bikepacking trail, single stage, fixed route
          210 km / 4700 D+ in 20 hours
          <br />
          Max 150 participants
        </p>
        <p className={styles.heroDate}>Treviso, April 11th 2026 @6:30:00AM</p>
        {/* <a
          className={styles.mainCta}
          target="_blanck"
          href="https://api.endu.net/r/i/94851"
        >
          registration
        </a> */}
        <CoverImage />
      </section>
      {/* <section className={styles.row}>
        <iframe src="https://livegps.setetrack.it/Home/IndexMapset?mapset=S00824_2025&version=lite" style={{ border: 'none' , width: '100%', height: '640px'}} />
      </section> */}
      <section className={styles.row}>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>Trail</h2>
          <p className={styles.paragraph}>
            The Hippo Bike Trail develops on a circular route, with departure
            and arrival at{" "}
            <a href="https://www.instagram.com/habitatbistrot/" target="_black">
              {" "}
              Habitat le Bandie
            </a>
            , 210 km long (dirt road at 85%) with 4700 meters of altitude
            difference. Inside the Hippo trail you will find all the ingredients
            of a real trail: hike-a-bike, fords crossing, a long part without
            human presence, rocky descents , ... in short, use at least a 50mm
            tyre 😜 and comfortable shoes.
          </p>
          <p className={styles.paragraph___featured}>
            The challenge is to complete it within 20 hours ( 02:30 of April 12 ).
          </p>
          <p className={styles.paragraph}>
            If you complete it successfully you can consider yourself ready for
            the "real" trails.
          </p>
          <p className={styles.paragraph}>
            If you want to know more read the{" "}
            <a
              target="_blanck"
              href="https://docs.google.com/document/d/1pHsYHB8XL5QpDFVQ7rXr-ewlV-BGC8GPSY8V2Gf3DS8/view"
            >
              rules
            </a>{" "}and the{" "}<a
              target="_blanck"
              href="https://docs.google.com/presentation/d/1bBqUNS2DObvj7OXV7frxlwSzCkw4D7kdokBWW8EXEVQ/view"
            >
              event presentation
            </a>
          </p>
        </div>
        <div className={styles.row__column}>
          <Map />
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>Partner</h2>
          <div className={styles.horizonatalFlex}>
            <BikemapLogo />
            <HabitatLogo />
          </div>
        </div>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>About</h2>
          <div className={styles.horizonatalFlex}>
            <AmgLogo />
            <p className={styles.paragraph}>
              The trail is organized by AMG Alta Marca Gravel ASD. We were born
              with the aim to create moments of sharing for all enthusiasts of
              cycling. This is one of those moments.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>Photo Gallery</h2>
          {/* @ts-ignore */}
          <picflow-gallery id="gal_Qd40LwN4VshmBq3v" lightbox="#000000E6"></picflow-gallery>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer__social}>
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <p className={styles.footer__address}>
          Copyright © 2023 AMG ALTA MARCA GRAVEL ASD, VIA II GIUGNO, 54 VILLORBA
          (TV) P.IVA: 05286420269
          <br/>
          amg.gravel@gmail.com
        </p>
        <p className={styles.footer__iubenda}>
          <a
            target="_black"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
            href="https://www.iubenda.com/privacy-policy/55651783"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>{" "}
          <a
            target="_black"
            href="https://www.iubenda.com/privacy-policy/55651783/cookie-policy"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
            title="Cookie Policy "
          >
            Cookie Policy
          </a>
        </p>
      </footer>
    </main>
  );
}
