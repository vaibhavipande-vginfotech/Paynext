import { Code, Globe, TrendingUp, Sprout, Mail } from 'lucide-react'
import { Container, Eyebrow, Reveal, IconTile } from '@/components/site/primitives'
import { Marquee } from '@/components/site/motion'
import PageHero from '@/components/site/page-hero'
import { careers, contact } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'

// Content: master document "Careers" section, verbatim.
export const metadata = pageMeta("/careers", {
  title: 'Careers | PayNext',
  description: `${careers.title} ${careers.welcome}`,
})

const icons = [Code, Globe, TrendingUp, Sprout]
const teams = ['Engineering', 'Product', 'Risk', 'Compliance', 'Sales']

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join a team building" highlight="next-generation payment infrastructure." />

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>{careers.whyTitle}</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careers.why.map((w, i) => (
              <Reveal key={w} delay={i * 0.06} className="hover-card rounded-3xl border border-border bg-card p-7">
                <IconTile icon={icons[i]} />
                <p className="mt-5 text-lg font-semibold leading-snug text-foreground">{w}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-16">
        <Reveal className="text-center">
          <p className="mx-auto max-w-2xl px-5 text-lg text-foreground">{careers.welcome}</p>
        </Reveal>
        <Marquee speed={30} className="mt-10">
          {[...teams, ...teams].map((t, i) => (
            <span key={t + i} className="hover-chip whitespace-nowrap rounded-full border border-border bg-card px-8 py-4 text-lg font-semibold text-brand">
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="py-24">
        <Container className="text-center">
          <Reveal>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {contact.email}
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
