import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Paynext - Modern Payment Infrastructure for Global Commerce',
  description:
    'Paynext provides unified payment processing, intelligent routing, and enterprise-grade switching solutions for businesses seeking reliable, scalable payment infrastructure.',
  keywords:
    'payment gateway, payment processing, payment infrastructure, merchant services, online payments, payment orchestration, fintech solutions, B2B payments',
  authors: [{ name: 'Paynext' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Paynext - Modern Payment Infrastructure',
    description:
      'Enterprise-grade payment switching and processing solutions for modern businesses.',
    type: 'website',
    url: 'https://paynext.com',
    siteName: 'Paynext',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paynext - Modern Payment Infrastructure',
    description:
      'Enterprise-grade payment switching and processing solutions for modern businesses.',
  },
  metadataBase: new URL('https://paynext.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}