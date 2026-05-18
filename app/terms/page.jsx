import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Terms of Service | Paynext',
}

export default function TermsPage() {
  return (
    <main className={inter.className}>
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">Terms of Service coming soon.</p>
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link> for more information.
          </div>
        </div>
      </section>

    </main>
  )
}

