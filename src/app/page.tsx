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
      <header>
        <h1>
          <Logo />
        </h1>
      </header>
      <section className={styles.coverImage}>
        <p className={styles.heroDescription}>
          Hippo è un trail bikepacking unsupported, tappa unica, traccia fissa
          210 km e 4500 D+ da concludere in 18h
        </p>
        <p className={styles.heroDate}>Treviso, 13 Aprile 2024 ore 7:00</p>
        <a
          className={styles.mainCta}
          target="_blanck"
          href="https://forms.gle/xqUSt1SXj7xLCwaA9"
        >
          iscriviti
        </a>
        <CoverImage />
      </section>
      <section>
        <h2 className={styles.subtitle}>Trail</h2>
        <p>
          La Hippo Bike Trail si sviluppa su un percorso ad anello, con partenza
          e arrivo a Habitat le Bandie, lungo 210 km ( sterrato all’85% ) con
          4500 metri di dislivello. Dentro la Hyppo trail troverete tutti gli
          ingredienti di un vero trail: hike-a-bike, guadi, un lungo tratto in
          quota senza presenza umana, discese scassate, ... insomma non
          presentatevi se non avete almeno una gomma da 45mm 😜
          <b>
            La sfida è concluderlo entro 18 ore (ore 1:00 del 14 Aprile).
          </b>{" "}
          Se lo concludete con successo potete ritenervi pronti per i trail più
          lunghi.
        </p>
        <p>
          Se vuoi sapere di più leggi il{" "}
          <a
            target="_blanck"
            href="https://docs.google.com/document/d/1tFjGzyMs6XhUHhFCs37sNum7AuV8YPR8qFyQjkTRTF4/view"
          >
            regolamento dell’evento
          </a>
        </p>
        <Map />
      </section>
      <section>
        <h2 className={styles.subtitle}>Partner</h2>
        <MorettiLogo />
        <HabitatLogo />
        <h2 className={styles.subtitle}>Chi Siamo</h2>
        <AmgLogo />
        <p>
          Il trail è organizzato da AMG Alta Marca Gravel. Siamo nati con lo
          scopo di creare momenti di condivisione per tutti gli appassionati del
          ciclismo. Questo è uno di quei momenti.
        </p>
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
