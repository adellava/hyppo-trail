import Image from 'next/image'
 
export function CoverImage() {
  return (
    <Image
      src="/cover.png"
      width={2085}
      height={1174}
      alt="hippo cover image"
    />
  )
}