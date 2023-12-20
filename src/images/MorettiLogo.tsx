import Image from 'next/image'
 
export function MorettiLogo() {
  return (
    <Image
      src="/moretti_logo.png"
      width={120}
      height={120}
      alt="moretti logo"
    />
  )
}