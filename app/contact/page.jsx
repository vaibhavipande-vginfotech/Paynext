import { Mail, Clock, Building2, MessageSquare, Phone, MapPin } from 'lucide-react'
import { contact } from '@/lib/site-content'
import PageHero from '@/components/site/page-hero'
import { Container, IconTile, Reveal } from '@/components/site/primitives'
import ContactForm from '@/components/site/contact-form'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/contact", {
  title: 'Contact Us | PayNext',
  description:
    'For Enterprise Inquiries: Email: info@paynext.co.in · Solutions Team Response Time: 24–48 Hours',
})

// Content: master document "Contact Us" + address/telephone/sales email from the live site
// (https://paynext.co.in/pages/contact-us.html).
const contactInfo = [
  {
    icon: Building2,
    title: 'Head Office',
    lines: [contact.legalName, ...contact.address],
    href: contact.mapUrl,
    linkLabel: 'Google Maps',
    wide: true,
  },
  { icon: Phone, title: 'Telephone', lines: [contact.phone], href: contact.phoneHref },
  { icon: Mail, title: 'Email', lines: [contact.salesEmail], href: `mailto:${contact.salesEmail}` },
  { icon: Clock, title: 'Solutions Team Response Time', lines: ['24–48 Hours'], wide: true },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact"
        highlight="Us"
        lead={
          <>
            For Enterprise Inquiries: Email: info@paynext.co.in
            <br />
            Solutions Team Response Time: 24–48 Hours
          </>
        }
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
            <Reveal variant="left" className="min-w-0">
              <ContactForm />
            </Reveal>

            <Reveal variant="right" className="min-w-0 space-y-6" delay={0.1}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className={`hover-card rounded-3xl border border-border bg-card p-6 sm:p-8 ${info.wide ? 'sm:col-span-2' : ''}`}
                  >
                    <IconTile icon={info.icon} className="mb-5" />
                    <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                    {info.href && !info.linkLabel ? (
                      <a href={info.href} className="inline-flex min-h-11 items-center break-all text-sm font-medium text-brand hover:underline">
                        {info.lines[0]}
                      </a>
                    ) : (
                      info.lines.map((line, i) => (
                        <p key={i} className={`break-words text-sm leading-relaxed ${i === 0 && info.linkLabel ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                          {line}
                        </p>
                      ))
                    )}
                    {info.linkLabel && (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                      >
                        <MapPin className="h-4 w-4" aria-hidden="true" /> {info.linkLabel}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Direct email CTA */}
              <div className="flex items-center gap-4 rounded-3xl border border-border bg-brand-soft p-6">
                <IconTile icon={Mail} className="shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">For Enterprise Inquiries</p>
                  <a
                    href="mailto:info@paynext.co.in"
                    className="inline-flex min-h-11 items-center break-all font-semibold text-brand hover:underline"
                  >
                    info@paynext.co.in
                  </a>
                </div>
              </div>

              {/* Technical Consultation CTA */}
              <div className="hover-card flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                <IconTile icon={MessageSquare} className="shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">For Technical Discussions</p>
                  <p className="text-sm font-medium text-foreground">
                    Schedule a Technical Consultation through our website
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
