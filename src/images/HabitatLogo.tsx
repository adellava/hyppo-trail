import Image from 'next/image'
 
export function HabitatLogo() {
  return (
    <Image
      src="/habitat_logo.png"
      width={120}
      height={120}
      alt="habitat logo"
    />
  )
}