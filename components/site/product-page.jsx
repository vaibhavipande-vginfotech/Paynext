import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container, Reveal, IconTile, SectionHeader } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"

// Shared layout for the individual product pages (POS / MPOS, E-Commerce Gateway, Bharat QR & UPI).
// All wording is passed in from the page files.
export default function ProductPage({ hero, overview, services, related }) {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} highlight={hero.highlight} lead={hero.lead} />

      <section className="py-24">
        <Container>
          <Reveal className="hover-card grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="min-w-0">
              <IconTile icon={overview.icon} />
              <h2 className="mt-6 break-words text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {overview.title}
              </h2>
            </div>
            <div className="min-w-0 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {overview.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <SectionHeader eyebrow={services.eyebrow} title={services.title} highlight={services.highlight} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item, i) => {
              const Icon = services.icons[item] || CheckCircle2
              return (
                <Reveal key={item} delay={(i % 3) * 0.06} className="hover-card flex h-full min-w-0 items-start gap-4 rounded-3xl border border-border bg-card p-6 hover:border-brand/40">
                  <IconTile icon={Icon} className="shrink-0" />
                  <span className="min-w-0 break-words pt-2.5 text-sm font-medium text-foreground">{item}</span>
                </Reveal>
              )
            })}
          </div>
          {services.cta && (
            <Reveal className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link href={services.cta.href}>
                  {services.cta.label}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeader title={related.title} highlight={related.highlight} lead={related.lead} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {related.items.map((r, i) => (
              <Reveal key={r.href} delay={i * 0.06}>
                <Link
                  href={r.href}
                  className="hover-card group flex h-full min-w-0 items-center gap-4 rounded-3xl border border-border bg-card p-6 hover:border-brand/40"
                >
                  <IconTile icon={r.icon} className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="break-words text-lg font-semibold text-foreground transition-colors group-hover:text-brand">{r.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

