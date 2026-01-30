import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Turbo Servis Novi Sad | Remont Turbo Kompresora',
  description: 'Stručan remont turbo kompresora u Novom Sadu. 10+ godina iskustva, garancija 12 meseci.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
