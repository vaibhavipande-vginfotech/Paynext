import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog | Paynext',
  description: 'Latest insights on payment infrastructure, fintech trends, and payment processing best practices.'
}

export default function BlogPage() {
  return (
    <main className={inter.className}>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Payment Infrastructure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Insights & Updates
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest articles on payment switching, fintech trends, and enterprise payment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">Coming soon: In-depth articles on payment orchestration, ISO 8583 modernization, and fintech infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

