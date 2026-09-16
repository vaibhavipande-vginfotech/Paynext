import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Pricing | PayNext',
  description:
    'Flexible, volume-based pricing for PayNext payment switching, card management, and orchestration platforms. Enterprise-grade solutions with transparent, custom quotes.',
}

const tiers = [
  {
    name: 'Growth',
    tagline: 'For scaling fintechs and challenger banks',
    highlight: false,
    features: [
      'PerseusPay switching (single channel)',
      'Up to standard TPS throughput',
      'Domestic transaction processing',
      'Standard settlement & reconciliation',
      'Business-hours support',
      'Shared cloud deployment',
    ],
  },
  {
    name: 'Scale',
    tagline: 'For high-volume banks and processors',
    highlight: true,
    features: [
      'Multi-channel acquiring (POS, IPG, UPI, NCMC, NETC)',
      'High TPS with load balancing & failover',
      'Domestic & international, DCC/MCC support',
      'VISTA card management & issuance',
      'Europa dynamic multi-bank routing',
      '24x7 priority support with SLAs',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For regulated institutions at national scale',
    highlight: false,
    features: [
      'Everything in Scale, plus:',
      'Dedicated / on-premise / hybrid deployment',
      'Custom integrations & rule engines',
      'Advanced fraud, risk & dispute management',
      'Named solution architect & TAM',
      'Custom compliance & audit support',
    ],
  },
]

const included = [
  'PCI-DSS aligned security controls',
  'Encryption in transit and at rest',
  'Real-time monitoring & alerting',
  'RBI-compliant data localisation',
  'Transaction-level analytics',
  'Onboarding & implementation support',
  '99.99% uptime target',
  'Rapid go-live (avg. ~1 week)',
]

const faqs = [
  {
    q: 'How is pricing determined?',
    a: 'Pricing is based on your monthly transaction volume, the platforms and channels you enable, your deployment model, and the level of support and SLAs you require. We provide a tailored quote after a short scoping call.',
  },
  {
    q: 'Is there a setup or implementation fee?',
    a: 'Implementation is scoped per engagement. Most institutions go live within roughly a week; the exact effort and any one-time fees are outlined in your proposal.',
  },
  {
    q: 'Can we start on one platform and add more later?',
    a: 'Yes. Many clients begin with PerseusPay switching and add VISTA and Europa as their programme grows. Pricing scales with what you enable.',
  },
  {
    q: 'Do you offer on-premise deployment?',
    a: 'Yes — cloud-native, on-premise, and hybrid deployments are all available, typically under the Enterprise tier.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Enterprise Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Volume-based pricing tailored to your transaction throughput, platforms, and support needs. No surprises &mdash; just a quote built for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl border p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10'
                    : 'border-border bg-card'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">Custom</span>
                  <span className="text-muted-foreground"> / volume-based</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={tier.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}
                  variant={tier.highlight ? 'default' : 'outline'}
                >
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included everywhere */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Included in every plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Pricing FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready for a tailored quote?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us about your volumes and goals, and our solutions team will build pricing that fits &mdash; usually within 24&ndash;48 hours.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
