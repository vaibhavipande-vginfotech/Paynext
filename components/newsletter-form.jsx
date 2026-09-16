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
    <form onSubmit={handleSubmit} className="flex gap-3">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group"
      >
        Subscribe
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  )
}
