import styles from "./page.module.css";
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  AmgLogo,
  HabitatLogo,
  MorettiLogo,
  CoverImage,
  Map,
} from "../images/";
import Description from "../components/Description";
import Challenge from "../components/Challenge";
import ChallengeBis from "../components/ChallengeBis";
import Rules from "../components/Rules";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>
          <Logo />
        </h1>
      </header>
      <section className={styles.coverImage}>
        <p className={styles.heroDescription}>
          Hippo is an unsupported bikepacking trail, single stage, fixed route
          210 km / 4500 D+ to be completed 18h
        </p>
        <p className={styles.heroDate}>Treviso, April 13th 2024 @7:00AM</p>
        <a
          className={styles.mainCta}
          target="_blanck"
          href="https://forms.gle/xqUSt1SXj7xLCwaA9"
        >
          registration
        </a>
        <CoverImage />
      </section>
      <section className={styles.row}>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>Trail</h2>
          <p className={styles.paragraph}>
            <Description />
          </p>
          <p className={styles.paragraph___featured}>
            <Challenge />
          </p>
          <p className={styles.paragraph}>
            <ChallengeBis />
          </p>
          <p className={styles.paragraph}>
            <Rules />
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
          <h2 className={styles.subtitle}>Chi Siamo</h2>
          <div className={styles.horizonatalFlex}>
            <AmgLogo />
            <p className={styles.paragraph}>
              Il trail è organizzato da AMG Alta Marca Gravel. Siamo nati con lo
              scopo di creare momenti di condivisione per tutti gli appassionati
              del ciclismo. Questo è uno di quei momenti.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footer__social}>
          <FacebookIcon />
          <InstagramIcon />
        </div>
        <p>
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
