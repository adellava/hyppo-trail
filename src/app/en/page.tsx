import styles from "../page.module.css";
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  AmgLogo,
  HabitatLogo,
  MorettiLogo,
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
          210 km / 4500 D+ to be completed 20h
          <br />
          Max 100 participants
        </p>
        <p className={styles.heroDate}>Treviso, April 12th 2025 @6:30:00AM</p>
        <p className={styles.heroDescription}>registrations will open December 1st</p>
        {/* <a
          className={styles.mainCta}
          target="_blanck"
          href="https://forms.gle/xqUSt1SXj7xLCwaA9"
        >
          registration
        </a> */}
        <CoverImage />
      </section>
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
            , 210 km long (dirt road at 85%) with 4500 meters of altitude
            difference. Inside the Hippo trail you will find all the ingredients
            of a real trail: hike-a-bike, fords crossing, a long part without
            human presence, rocky descents , ... in short, use at least a 45mm
            tyre 😜
          </p>
          <p className={styles.paragraph___featured}>
            The challenge is to complete it within 18 hours (1:00 am on April
            14th).
          </p>
          <p className={styles.paragraph}>
            If you complete it successfully you can consider yourself ready for
            the "real" trails.
          </p>
          <p className={styles.paragraph}>
            If you want to know more read the{" "}
            <a
              target="_blanck"
              href="https://docs.google.com/document/d/1ziy1dPimT-E23iJuSbz0nGelAvLbQnoMzEYpjb5SLf8/view"
            >
              rules
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
            <MorettiLogo />
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
