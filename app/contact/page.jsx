"use client"

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { MapPin, Mail, Clock, Send, Building2, Globe, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'

// Real contact info from website
const contactInfo = [
  {
    icon: Building2,
    title: 'Head Office',
    lines: [
      'PayNext Private Limited',
      'Mumbai, India'
    ],
  },
  {
    icon: Mail,
    title: 'Enterprise Inquiries',
    lines: ['info@paynext.co.in'],
  },
  {
    icon: Clock,
    title: 'Solutions Team Response Time',
    lines: ['24–48 Hours'],
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Reach Out to Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Let's Start a Conversation
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Have questions about our products or services? Want to schedule a demo?
              Our solutions team is ready to help you find the right payment solution — and we respond within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our solutions team will get back to you within 24–48 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you at{' '}
                    <strong className="text-foreground">info@paynext.co.in</strong> within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel>Full Name</FieldLabel>
                        <Input
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Work Email</FieldLabel>
                        <Input
                          type="email"
                          placeholder="john@yourbank.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel>Organisation Name</FieldLabel>
                        <Input
                          placeholder="Your Bank / Fintech"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Phone Number</FieldLabel>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel>I'm interested in</FieldLabel>
                      <Select value={formState.interest} onValueChange={(value) => setFormState({ ...formState, interest: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product or service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="perseuspay">PerseusPay — Core Switching & Card Processing</SelectItem>
                          <SelectItem value="vista">VISTA — Acquiring Management Platform</SelectItem>
                          <SelectItem value="europa">Europa — Payment Orchestration Platform</SelectItem>
                          <SelectItem value="pos">POS / MPOS Solutions</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce Gateway</SelectItem>
                          <SelectItem value="bharatqr">Bharat QR & UPI</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="technical">Technical Consultation</SelectItem>
                          <SelectItem value="partnership">Partnership / Integration Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel>Message</FieldLabel>
                      <Textarea
                        placeholder="Tell us about your payment infrastructure requirements..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                      />
                    </Field>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`bg-card border border-border rounded-2xl p-6 ${index === 0 ? 'sm:col-span-2' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">What Happens Next?</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'We review your inquiry', desc: 'Our solutions team reads every message and matches you with the right expert.' },
                    { step: '02', title: 'Response within 24–48 hrs', desc: 'Expect a reply at info@paynext.co.in with initial guidance or a meeting invite.' },
                    { step: '03', title: 'Technical Consultation', desc: 'We schedule a deep-dive session to understand your infrastructure requirements.' },
                    { step: '04', title: 'Tailored Proposal', desc: 'Receive a solution proposal with implementation timeline — typically just 1 week.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-primary font-bold text-sm font-mono mt-0.5">{item.step}</span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct email CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">For Enterprise Inquiries</p>
                  <a href="mailto:info@paynext.co.in" className="text-primary font-semibold hover:underline">
                    info@paynext.co.in
                  </a>
                </div>
              </div>

              {/* Technical Consultation CTA */}
              <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">For Technical Discussions</p>
                  <p className="text-foreground font-medium text-sm">
                    Schedule a Technical Consultation through our website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}