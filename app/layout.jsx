import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { BackToTop } from '@/components/site/scroll-extras'
import JsonLd from '@/components/site/json-ld'
import BreadcrumbJsonLd from '@/components/site/breadcrumb-json-ld'
import { SITE_URL, OG_IMAGE } from '@/lib/seo'
import { brand, contact, engines } from '@/lib/site-content'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Site-wide defaults. Every page overrides title, description, canonical and Open Graph via pageMeta().
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'PayNext — Certified Technology Service Provider (TSP)',
  description: brand.positioning,
  applicationName: 'PayNext',
  keywords: [
    'PayNext', 'PayNext+', 'PerseusPay', 'VISTA', 'Europa', 'CocoNet', 'Certified Technology Service Provider', 'TSP',
    'payment switching', 'card processing', 'acquiring', 'issuance', 'payment orchestration', 'multi-bank routing',
    'POS', 'IPG', 'UPI', 'NCMC', 'NETC', 'Micro ATM', 'ATM switching', 'Mumbai',
  ],
  authors: [{ name: 'PayNext Private Limited', url: SITE_URL }],
  creator: 'PayNext Private Limited',
  publisher: 'PayNext Private Limited',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: 'PayNext',
    locale: 'en_IN',
    title: 'PayNext — Certified Technology Service Provider (TSP)',
    description: brand.statement,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayNext — Certified Technology Service Provider (TSP)',
    description: brand.statement,
    images: [OG_IMAGE.url],
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F6FA' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1128' },
  ],
}

// Structured data (schema.org) — helps search engines and AI assistants identify PayNext correctly.
// Facts from the Content Master Document and the live contact page (paynext.co.in).
const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'PayNext',
  legalName: contact.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  image: `${SITE_URL}/og.png`,
  description: brand.positioning,
  slogan: 'One Switch. Every Channel. Total Control.',
  foundingDate: '2017',
  foundingLocation: 'Mumbai, India',
  email: contact.email,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1, Esspee Tower, 2nd Floor, Datta Pada Road, Opp Oberoy Sky City, Borivali East',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400066',
    addressCountry: 'IN',
  },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', email: contact.salesEmail, telephone: contact.phone },
    { '@type': 'ContactPoint', contactType: 'customer support', email: contact.email },
  ],
  knowsAbout: ['Payment switching', 'Card processing', 'Acquiring', 'Card issuance', 'Payment orchestration', 'UPI', 'NCMC', 'NETC', 'ATM switching'],
  makesOffer: engines.map((e) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'SoftwareApplication', name: e.name, applicationCategory: 'BusinessApplication', description: `${e.role}. ${e.tagline}` },
  })),
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'PayNext',
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd data={[organization, website]} />
        <BreadcrumbJsonLd />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a
            href="#content"
            className="sr-only z-[60] rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
