import Image from "next/image";

export function InstagramIcon() {
  return (
    <a
      target="_black"
      href="https://www.instagram.com/hippo_bike_trail/"
    >
      <Image
        src="/instagram_icon.png"
        width={40}
        height={40}
        alt="instagram icon"
      />
    </a>
  );
}
