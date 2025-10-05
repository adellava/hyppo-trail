import Image from 'next/image'
 
export function Map() {
  return (
    <div
    style={{
      position: "relative",
      minHeight: 540,
      width: "100%",
    }}
  >
    <Image
      src="/mappa_completa_26.svg"
      fill={true}
      style={{
        objectFit: "contain",
      }}
      alt="hippo bike trail route"
    />
    </div>
  )
}