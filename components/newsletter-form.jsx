"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = 'Subscribe to PayNext updates'
    const body = `Please add me to the PayNext newsletter.\n\nEmail: ${email}`
    window.location.href = `mailto:info@paynext.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@company.com"
        className="h-11 min-w-0 flex-1 rounded-full border border-input bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 group"
      >
        Subscribe
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  )
}
