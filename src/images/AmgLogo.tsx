import Image from 'next/image'
 
export function AmgLogo() {
  return (
    <Image
      src="/amg_logo.png"
      width={120}
      height={120}
      alt="amg logo"
    />
  )
}