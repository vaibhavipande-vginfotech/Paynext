"use client"

import { Shield, Zap, Globe, Lock, BarChart3, Headphones, Server, RefreshCw } from 'lucide-react'

const features = [
  { icon: Shield, title: 'PCI DSS Compliant', description: 'Fully certified PCI DSS 3.2.1 and PA DSS compliant infrastructure.' },
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-second transaction processing with optimized routing algorithms.' },
  { icon: Globe, title: 'Global Connectivity', description: 'Connect to major card networks, banks, and payment providers worldwide.' },
  { icon: Lock, title: 'End-to-End Encryption', description: 'Military-grade encryption for all data in transit and at rest.' },
  { icon: BarChart3, title: 'Real-time Analytics', description: 'Comprehensive dashboards for transaction monitoring and business intelligence.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock technical support from our expert team.' },
  { icon: Server, title: 'High Availability', description: '99.99% uptime guarantee with redundant infrastructure.' },
  { icon: RefreshCw, title: 'Seamless Integration', description: 'RESTful APIs and SDKs for quick integration with existing systems.' },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Enterprise-Grade Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Built with the latest technology stack and security standards.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-card/50 border border-border/50 rounded-2xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
