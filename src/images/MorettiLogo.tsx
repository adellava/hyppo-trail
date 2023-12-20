import Image from "next/image";

export function MorettiLogo() {
  return (
    <a target="_black" href="https://www.instagram.com/habitatbistrot/">
      <Image
        src="/moretti_logo.png"
        width={120}
        height={120}
        alt="moretti logo"
      />
    </a>
  );
}
