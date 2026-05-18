import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pricing | Paynext',
  description: 'Flexible pricing for payment switching and orchestration platforms. Enterprise-grade solutions at scale.'
}

export default function PricingPage() {
  return (
    <main className={inter.className}>
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transparent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Enterprise Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom pricing tailored to your transaction volume and business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">Contact sales for custom pricing based on transaction volume, features, and support requirements.</p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}

