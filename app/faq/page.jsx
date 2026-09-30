import Link from 'next/link'
import { ArrowRight, Building2, Cloud, Shield, Calendar, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Placeholder from '@/components/site/placeholder'
import PageHero from '@/components/site/page-hero'
import { Container, Reveal, IconTile, SectionHeader } from '@/components/site/primitives'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/faq", {
  title: 'FAQ | PayNext',
  description: 'Frequently asked questions about PayNext payment solutions and services.',
})

// Enterprise FAQ Highlights
const enterpriseHighlights = [
  { icon: Building2, title: 'Multi-acquirer support', value: 'Yes' },
  { icon: Shield, title: 'CBS integration (VISTA)', value: 'Yes' },
  { icon: Cloud, title: 'Cloud-native deployment', value: 'Yes' },
  { icon: Zap, title: 'DCC settlement support', value: 'Yes' },
  { icon: Calendar, title: 'Average implementation timeline', value: '1 Week' },
]

// FAQ questions and answers: to be provided by the client (Sankar). Placeholder shown until then.

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        lead="Find answers to common questions about our products, services, and company. Can't find what you're looking for? Contact our team."
      />

      {/* Enterprise FAQ Highlights */}
      <section className="py-24">
        <Container>
          <SectionHeader title="Enterprise FAQ" highlight="Highlights" />

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseHighlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.06}
                className="hover-card flex items-center gap-4 rounded-3xl border border-border bg-card p-6"
              >
                <IconTile icon={item.icon} className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ questions & answers — client to provide */}
      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <Placeholder label="FAQ" className="mx-auto max-w-4xl" />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Still Have Questions?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our solutions team is here to help. Reach out to us and we'll get back to you within 24–48 hours.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-h-11">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-11">
                <Link href="mailto:info@paynext.co.in">Email Support</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
