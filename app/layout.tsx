import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/lenis-provider'
import { BackToTop } from '@/components/back-to-top'
import { FloatingWA } from '@/components/ui/floating-wa'
import './globals.css'

export const metadata: Metadata = { metadataBase: new URL('https://silogistica.com.ar'), title: { default: 'SI Logística | Movemos lo que importa', template: '%s | SI Logística' }, description: 'SI Logística: mudanzas, almacenaje y distribución nacional desde Ciudadela, Buenos Aires. Flota monitoreada y atención humana.', keywords: ['logística en Argentina', 'mudanzas nacionales', 'distribución', 'almacenaje', 'Ciudadela'], authors: [{ name: 'SI Logística' }], creator: 'SI Logística', alternates: { canonical: '/' }, icons: { icon: '/logo.png', apple: '/logo.png' }, openGraph: { type: 'website', locale: 'es_AR', url: 'https://silogistica.com.ar', siteName: 'SI Logística', title: 'SI Logística | Movemos lo que importa', description: 'Logística, mudanzas y distribución nacional con atención humana.', images: [{ url: '/logo.png', width: 800, height: 600, alt: 'SI Logística' }] }, twitter: { card: 'summary_large_image', title: 'SI Logística | Movemos lo que importa', description: 'Logística, mudanzas y distribución nacional.', images: ['/logo.png'] }, robots: { index: true, follow: true }, generator: 'SI Logística' }
export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#30302f', width: 'device-width', initialScale: 1 }
const jsonLd = { '@context': 'https://schema.org', '@type': 'LogisticsService', name: 'SI Logística & Servicios Integrales', telephone: '+541160010784', email: 'info@silogistica.com.ar', address: { '@type': 'PostalAddress', streetAddress: 'Juan B Justo 3460', addressLocality: 'Ciudadela', addressCountry: 'AR' }, areaServed: 'Argentina' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning><body className="antialiased"><LenisProvider><ThemeProvider>{children}<FloatingWA /><BackToTop /></ThemeProvider></LenisProvider><Script id="business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
