import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Repeat, CreditCard, Layers, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Products | Paynext',
  description: 'Explore Paynext\'s comprehensive payment solutions - PerseusPay, VISTA, and Europa platforms.',
}

const products = [
  {
    icon: Repeat,
    name: 'PerseusPay',
    tagline: 'Payment Switching Platform',
    description: 'Enterprise-grade payment switching solution that seamlessly connects acquiring banks, issuing banks, and payment networks. Handle millions of transactions with sub-second routing and intelligent failover.',
    features: [
      'Multi-protocol support (ISO 8583, ISO 20022, JSON)',
      'Real-time transaction routing and switching',
      'Intelligent failover and load balancing',
      'Comprehensive settlement and reconciliation',
      'Multi-currency and multi-network support',
      'Real-time monitoring and alerts',
      'Detailed transaction analytics',
      'Configurable business rules engine',
    ],
    href: '/products/perseuspay',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    name: 'VISTA',
    tagline: 'Card Management System',
    description: 'Complete card lifecycle management platform for issuing and processing. From card issuance to transaction authorization, manage every aspect of your card program with precision and control.',
    features: [
      'End-to-end card lifecycle management',
      'Instant and physical card issuance',
      'Secure PIN generation and management',
      'Advanced fraud detection and prevention',
      'Loyalty and rewards program management',
      'Multi-currency card support',
      'Mobile wallet integration',
      'Customer self-service portal',
    ],
    href: '/products/vista',
    color: 'from-primary to-blue-500',
  },
  {
    icon: Layers,
    name: 'Europa',
    tagline: 'Payment Orchestration',
    description: 'Unified payment orchestration layer that optimizes payment flows across multiple providers. Increase authorization rates and reduce costs with intelligent payment routing and fallback mechanisms.',
    features: [
      'Smart payment routing algorithms',
      'Multi-provider aggregation',
      'Automatic failover and retry logic',
      'Dynamic cost optimization',
      'A/B testing for payment flows',
      'Unified API for all payment methods',
      'Real-time performance analytics',
      'Customizable workflow builder',
    ],
    href: '/products/europa',
    color: 'from-accent to-orange-500',
  },
]

export default function ProductsPage() {
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
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Products</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Payment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Three powerful platforms designed to handle every aspect of modern payment processing. 
              Built for scale, security, and seamless integration.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div 
                key={index}
                id={product.name.toLowerCase()}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{product.name}</h2>
                  <p className="text-primary font-semibold text-lg mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={product.href}>
                      Learn More About {product.name}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className={`relative bg-gradient-to-br ${product.color} p-1 rounded-3xl`}>
                    <div className="bg-card rounded-3xl p-8 lg:p-12">
                      <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <product.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                          <p className="text-muted-foreground">{product.name} Dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team to learn how Paynext can transform your payment infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
