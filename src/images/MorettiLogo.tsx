import Image from "next/image";

export function BikemapLogo() {
  return (
    <a target="_black" href="https://bike-map.it/">
      <Image
        src="/bikemap_logo.png"
        width={120}
        height={120}
        alt="bikemap logo"
      />
    </a>
  );
}
