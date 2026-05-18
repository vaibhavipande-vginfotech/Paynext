import Link from 'next/link'
import { Mail, MapPin, Phone, Globe, Shield, Award, Sparkles, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const navigation = {
    products: [
      { name: 'POS / MPOS', href: '/products/POS-MPOS' },
      { name: 'E-Commerce Gateway', href: '/products/E-commerceGateway' },
      { name: 'Bharat QR & UPI', href: '/products/BharatQR-UPI' },
    ],
    platforms: [
      { name: 'PerseusPay', href: '/' },
      { name: 'VISTA', href: '/' },
      { name: 'Europa', href: '/' },
    ],
    solutions: [
      { name: 'Merchant Onboarding', href: '/solutions' },
      { name: 'Payment Processing', href: '/solutions' },
      { name: 'Fraud Management', href: '/solutions' },
      { name: 'Analytics', href: '/solutions' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Support', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Brand Section - Large */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  PayNext
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-md">
              Certified Technology Service Provider (TSP) delivering bank-grade switching, 
              operational intelligence, and dynamic routing infrastructure for institutions 
              operating at scale.
            </p>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs text-gray-300">PCI-DSS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs text-gray-300">Certified TSP</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-gray-300">ISO 27001</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <MapPin className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Mumbai, India</span>
              </div>
              <a href="mailto:info@paynext.co.in" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <Mail className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>info@paynext.co.in</span>
              </a>
              <a href="tel:+916262676764" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <Phone className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>+91 6262 676 764</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 relative inline-block">
              Products
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 relative inline-block">
              Platforms
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {navigation.platforms.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 relative inline-block">
              Company
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-400">Get the latest updates on payment technology and industry insights.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PayNext Private Limited. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                PCI-DSS Level 1
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Award className="w-3 h-3" />
                RBI Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}