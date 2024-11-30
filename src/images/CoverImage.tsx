import Image from "next/image";

export function CoverImage() {
  return (
    <Image
      src="/cover1.jpg"
      fill={true}
      alt="hippo cover image"
      style={{
        objectFit: "cover",
        position: "absolute",
        zIndex: -1,
      }}
    />
  );
}
