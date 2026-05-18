"use client"

import { Building2, Landmark, Wallet, CreditCard, Banknote, PiggyBank } from 'lucide-react'

const clientTypes = [
  { icon: Landmark, name: 'Commercial Banks' },
  { icon: Building2, name: 'Regional Banks' },
  { icon: Wallet, name: 'Digital Wallets' },
  { icon: CreditCard, name: 'Card Networks' },
  { icon: Banknote, name: 'NBFCs' },
  { icon: PiggyBank, name: 'Cooperative Banks' },
]

const testimonials = [
  { quote: "Paynext's switching platform has transformed our payment infrastructure. The reliability and speed are unmatched.", author: "CTO", company: "Leading Private Bank" },
  { quote: "The VISTA card management system gave us complete control over our card program with minimal integration effort.", author: "Head of Digital Banking", company: "Regional Bank" },
  { quote: "Europa's orchestration capabilities helped us increase our authorization rates by 15% while reducing costs.", author: "VP of Payments", company: "Fintech Company" },
]

export default function ClientsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Who We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Trusted Across the Industry</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">From large commercial banks to emerging fintech companies.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientTypes.map((client, index) => (
              <div key={index} className="group flex flex-col items-center gap-3 p-6 bg-card/50 border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <client.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-card border border-border rounded-2xl p-8">
                <div className="absolute top-6 left-6 text-6xl text-primary/20 font-serif leading-none">"</div>
                <div className="relative z-10 pt-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.quote}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
