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

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Logo />
        </h1>
        <a href="/en" className={styles.header__changeLanguage}>
          🇬🇧
        </a>
      </header>
      <section className={styles.coverImage}>
        <p className={styles.heroDescription}>
          La Hippo è un unsupported bikepacking trail, single stage, fixed route
          210 km / 4500 D+ da completare in 19 ore
          <br />
          Massimo 100 partecipanti
        </p>
        <p className={styles.heroDate}>Treviso, 12 Aprile 2025 @6:30AM</p>
        <a
          className={styles.mainCta}
          target="_blanck"
          href="https://api.endu.net/r/i/94851" 
        >
          iscriviti
        </a>
        <CoverImage />
      </section>
      <section className={styles.row}>
        <iframe src="https://livegps.setetrack.it/Home/IndexMapset?mapset=S00824_2025&version=lite" style={{ border: 'none' , width: '100%', height: '640px'}} />
      </section>
      <section className={styles.row}>
        <div className={styles.row__column}>
          <h2 className={styles.subtitle}>Trail</h2>
          <p className={styles.paragraph}>
            La Hippo Bike Trail si sviluppa su un percorso ad anello, con
            partenza e arrivo a{" "}
            <a href="https://www.instagram.com/habitatbistrot/" target="_black">
              {" "}
              Habitat le Bandie
            </a>
            , lungo 210 km ( sterrato all’85% ) con 4500 metri di dislivello.
            Dentro la Hippo trail troverete tutti gli ingredienti di un vero
            trail: hike-a-bike, guadi, un lungo tratto in quota senza presenza
            umana, discese scassate, ... insomma non presentatevi se non avete
            almeno una gomma da 45mm 😜
          </p>
          <p className={styles.paragraph___featured}>
            La sfida è concluderlo entro 19 ore (ore 1:30 del 13 Aprile).
          </p>
          <p className={styles.paragraph}>
            Se lo concludete con successo potete ritenervi pronti per i trail
            più lunghi.
          </p>
          <p className={styles.paragraph}>
            Se vuoi sapere di più leggi il{" "}
            <a
              target="_blanck"
              href="https://docs.google.com/document/d/1tFjGzyMs6XhUHhFCs37sNum7AuV8YPR8qFyQjkTRTF4/view"
            >
              regolamento
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
