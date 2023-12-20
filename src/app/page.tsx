import styles from "./page.module.css";
import { Logo, FacebookIcon, InstagramIcon, AmgLogo, HabitatLogo, MorettiLogo, CoverImage } from "../images/";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <CoverImage />
      <MorettiLogo />
      <HabitatLogo />
      <AmgLogo />
      <FacebookIcon />
      <InstagramIcon />
    </main>
  );
}
