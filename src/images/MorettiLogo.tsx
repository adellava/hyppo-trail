import Image from "next/image";

export function MorettiLogo() {
  return (
    <a target="_black" href="https://blog.morettibassano.com/">
      <Image
        src="/moretti_logo.png"
        width={120}
        height={120}
        alt="moretti logo"
      />
    </a>
  );
}
