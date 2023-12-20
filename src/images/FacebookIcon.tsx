import Image from "next/image";

export function FacebookIcon() {
  return (
    <a target="_black" href="https://www.facebook.com/profile.php?id=61552668492976">
      <Image src="/fb_icon.png" width={40} height={40} alt="facebook icon" />
    </a>
  );
}
