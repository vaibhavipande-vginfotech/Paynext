"use client"

import Link from 'next/link'
import { ArrowRight, Repeat, CreditCard, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'

const platforms = [
  {
    icon: Repeat,
    name: 'PerseusPay',
    tagline: 'Payment Switching Platform',
    description: 'Enterprise-grade payment switching solution that seamlessly connects acquiring banks, issuing banks, and payment networks.',
    features: ['Multi-protocol support', 'Real-time routing', 'Intelligent failover', 'Comprehensive analytics'],
    href: '/products/perseuspay',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    name: 'VISTA',
    tagline: 'Card Management System',
    description: 'Complete card lifecycle management platform for issuing and processing. Manage every aspect of your card program.',
    features: ['Card issuance', 'PIN management', 'Fraud detection', 'Loyalty programs'],
    href: '/products/vista',
    color: 'from-primary to-blue-500',
  },
  {
    icon: Layers,
    name: 'Europa',
    tagline: 'Payment Orchestration',
    description: 'Unified payment orchestration layer that optimizes payment flows across multiple providers.',
    features: ['Smart routing', 'Provider aggregation', 'Fallback logic', 'Cost optimization'],
    href: '/products/europa',
    color: 'from-accent to-orange-500',
  },
]

export default function PlatformsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Platforms</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Comprehensive Payment Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Three powerful platforms designed to handle every aspect of modern payment processing.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6`}>
                <platform.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
              <p className="text-primary font-medium mb-4">{platform.tagline}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>
              <ul className="space-y-2 mb-8">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                <Link href={platform.href} className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
