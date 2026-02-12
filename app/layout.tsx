import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Turbo Servis Novi Sad | Remont Turbina | Veternik',
  description: 'Profesionalni turbo servis u Novom Sadu (Veternik). Remont turbina za sva vozila sa garancijom od 12 meseci. Brza dijagnostika i originalni delovi.',
  keywords: 'turbo servis novi sad, remont turbina novi sad, popravka turbine, turbo kompresori, balansiranje turbine, servis turbina veternik',
  authors: [{ name: 'Turbo Servis Novi Sad' }],
  openGraph: {
    title: 'Turbo Servis Novi Sad | Remont Turbina',
    description: 'Stručan remont turbo kompresora u Novom Sadu. 10+ godina iskustva, garancija 12 meseci.',
    locale: 'sr_RS',
    type: 'website',
    siteName: 'Turbo Servis Novi Sad',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://turboservis-novisad.rs', // Placeholder, update if real domain exists
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="antialiased overflow-x-hidden font-poppins">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
