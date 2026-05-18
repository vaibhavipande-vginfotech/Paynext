import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Globe, CheckCircle2, CreditCard, Shield, RefreshCw, FileText, Headphones, Monitor, QrCode } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'E-Commerce Gateway | Paynext',
  description: 'Instant & hassle-free online payment solutions. Secure, real-time transactions with best-in-class fraud detection for your e-commerce business.',
}

const features = [
  'Supports Card Schemes like RUPAY, MasterCard, Visa and American Express',
  'On Us Connectivity',
  'PCI-DSS Certified Infrastructure',
  'Inter-Change Calculation',
  'Reconciliation & Settlement',
  'Merchant Payments',
  'Smart Dispute Management',
  'Field Services & Terminal Deployment',
  'Customer Support',
]

const featureIcons = {
  'Supports Card Schemes like RUPAY, MasterCard, Visa and American Express': CreditCard,
  'On Us Connectivity': Shield,
  'PCI-DSS Certified Infrastructure': Shield,
  'Inter-Change Calculation': RefreshCw,
  'Reconciliation & Settlement': FileText,
  'Merchant Payments': CreditCard,
  'Smart Dispute Management': Shield,
  'Field Services & Terminal Deployment': Monitor,
  'Customer Support': Headphones,
}

export default function EcommerceGatewayPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Products</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              E-Commerce
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Gateway
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Instant & hassle-free online payment solutions for your e-commerce business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Instant & Hassle-Free Online Payment</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Convenient and cost-effective e-commerce payment solutions are the need of the hour. 
                Our e-commerce gateway solution takes place in real-time, giving you secure and safe transactions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                We help you take your business to new markets, boost your conversion rates by offering you a 
                localised shopping experience, and minimising fraud with our best-in-class fraud detection and 
                prevention system. This not only optimises the customer experience but also generates revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We combine our experience and expertise to help you grow your e-commerce business and expand 
                to new markets. We know how things work and what it takes to make your e-commerce business 
                reach greater heights.
              </p>
            </div>

            {/* Features Section */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  End–to–End E-Commerce{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Hosted Services
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = featureIcons[feature] || CheckCircle2
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore Other{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Products
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete suite of payment solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/products/POS-MPOS" className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">POS / MPOS</h3>
                  <p className="text-sm text-muted-foreground">Simplify your business processes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Link>

            <Link href="/products/BharatQR-UPI" className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Bharat QR & UPI</h3>
                  <p className="text-sm text-muted-foreground">Decoding the puzzle to swift payment</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}