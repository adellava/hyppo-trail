import Image from "next/image";

export function CoverImage() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: 400,
        height: "60vh",
        width: "100%",
      }}
    >
      <Image
        src="/cover.png"
        fill={true}
        alt="hippo cover image"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
