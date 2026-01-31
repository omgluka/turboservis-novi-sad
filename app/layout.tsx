import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Turbo Servis Novi Sad | Remont Turbo Kompresora | 10+ Godina',
  description: 'Stručan remont i popravka turbo kompresora u Novom Sadu. Preko 10 godina iskustva, garancija 12 meseci. Veternik. Besplatna dijagnostika.',
  keywords: 'turbo servis novi sad, remont turbo kompresora, popravka turbine, turbo servis veternik, turbo remont',
  authors: [{ name: 'Turbo Servis Novi Sad' }],
  openGraph: {
    title: 'Turbo Servis Novi Sad | Remont Turbo Kompresora',
    description: 'Stručan remont turbo kompresora. 10+ godina iskustva, garancija 12 meseci.',
    locale: 'sr_RS',
    type: 'website',
    siteName: 'Turbo Servis Novi Sad',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0a0a] text-[#f5f0e8] antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
