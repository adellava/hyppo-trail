import Image from "next/image";

export function HabitatLogo() {
  return (
    <a target="_black" href="https://www.instagram.com/habitatbistrot/">
      <Image
        src="/habitat_logo.png"
        width={120}
        height={120}
        alt="habitat logo"
      />
    </a>
  );
}
