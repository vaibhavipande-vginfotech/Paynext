import Link from 'next/link'
import { Mail, MapPin, Clock, Phone } from 'lucide-react'
import Logo from '@/components/site/logo'
import { brand, pillars, layers, solutionsNav, contact, compliance } from '@/lib/site-content'

const columns = [
  {
    title: 'Solutions',
    items: [{ name: 'Core Platforms Overview', href: '/products' }, ...solutionsNav],
  },
  {
    title: 'PayNext+',
    items: [
      { name: 'PayNext+', href: '/platform' },
      ...pillars.map((p) => ({ name: p.name, href: `/platform#${p.id}` })),
      ...layers.map((l) => ({ name: l.name, href: l.href })),
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Who we serve', href: '/who-we-serve' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Support',
    items: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Statement', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo className="h-8" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{brand.positioning}</p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
              {compliance.networks} {compliance.pci}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-foreground">{contact.legalName}</span>
                    {contact.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex min-h-11 items-center gap-3 hover:text-foreground sm:min-h-0">
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" /> {contact.phone}
                </a>
              </li>
              <li className="flex flex-wrap gap-x-5 gap-y-2">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-foreground">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" /> {contact.email}
                </a>
                <a href={`mailto:${contact.salesEmail}`} className="flex items-center gap-3 hover:text-foreground">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" /> {contact.salesEmail}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand" aria-hidden="true" /> {contact.response}
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="eyebrow mb-4">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.href + it.name}>
                    <Link href={it.href} className="hover-link text-sm text-muted-foreground">
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {contact.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
