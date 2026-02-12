import Image from 'next/image'

export default function Logo({ className = "", width = 224, height = 80 }: { className?: string, width?: number, height?: number }) {
  return (
    <Image
      src="/images/REMONT NS LOGO.webp"
      alt="Turbo Servis Novi Sad Logo"
      width={width}
      height={height}
      className={`h-auto object-contain ${className}`}
      priority
    />
  )
}
