"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'

export default function ContactForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const { name, email, company, phone, interest, message } = formState
    const subject = `New enquiry from ${name || 'PayNext website'}`
    const body = [
      `Name: ${name}`,
      `Work Email: ${email}`,
      `Organisation: ${company || '-'}`,
      `Phone: ${phone || '-'}`,
      `Interested in: ${interest || '-'}`,
      '',
      'Message:',
      message,
    ].join('\n')
    window.location.href = `mailto:info@paynext.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-w-0 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
      <h2 className="mb-2 text-2xl font-semibold text-foreground">Send us a Message</h2>
      <p className="text-muted-foreground mb-8">
        Solutions Team Response Time: 24–48 Hours
      </p>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-growth/15 flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-growth" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Your email is ready</h3>
          <p className="text-muted-foreground">
            <a href="mailto:info@paynext.co.in" className="font-semibold text-brand hover:underline">info@paynext.co.in</a>
            {' '}· Solutions Team Response Time: 24–48 Hours
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
                <Input
                  className="h-11"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">Work Email</FieldLabel>
                <Input
                  className="h-11"
                  id="contact-email"
                  name="email"
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
                <FieldLabel htmlFor="contact-company">Organisation Name</FieldLabel>
                <Input
                  className="h-11"
                  id="contact-company"
                  name="company"
                  placeholder="Your Bank / Fintech"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-phone">Phone Number</FieldLabel>
                <Input
                  className="h-11"
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="contact-interest">I'm interested in</FieldLabel>
              <Select value={formState.interest} onValueChange={(value) => setFormState({ ...formState, interest: value })}>
                <SelectTrigger id="contact-interest" className="w-full min-w-0 data-[size=default]:h-11">
                  <SelectValue placeholder="Select a product or service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="perseuspay">PerseusPay — Core Switching & Card Processing</SelectItem>
                  <SelectItem value="vista">VISTA — Acquiring Management Platform</SelectItem>
                  <SelectItem value="europa">Europa — Payment Orchestration Platform</SelectItem>
                  <SelectItem value="pos">POS / MPOS Solutions</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce Gateway</SelectItem>
                  <SelectItem value="bharatqr">Bharat QR & UPI</SelectItem>
                  <SelectItem value="technical">Technical Consultation</SelectItem>
                  <SelectItem value="atm">ATM Switching Solutions</SelectItem>
                  <SelectItem value="ncmc">NCMC (National Common Mobility Card) Solutions</SelectItem>
                  <SelectItem value="netc">NETC Switching</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                name="message"
                placeholder=""
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </Field>
            <Button type="submit" size="lg" className="min-h-11 w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </FieldGroup>
        </form>
      )}
    </div>
  )
}
