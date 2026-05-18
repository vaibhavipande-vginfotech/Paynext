"use client"

import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Payment Infrastructure?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Join the growing network of banks and fintechs that trust Paynext for their mission-critical payment operations.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
              <Link href="/contact">Schedule a Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
            <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@paynext.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
              <span>info@paynext.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
