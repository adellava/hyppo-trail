import Image from 'next/image'
 
export function Logo() {
  return (
    <Image
      src="/logo.svg"
      width={362}
      height={122}
      alt="hippo bike trail logo"
    />
  )
}