import Image from 'next/image'
 
export function Map() {
  return (
    <div
    style={{
      position: "relative",
      minHeight: 400,
      width: "100%",
    }}
  >
    <Image
      src="/map.svg"
      fill={true}
      style={{
        objectFit: "contain",
      }}
      alt="hippo bike trail route"
    />
    </div>
  )
}