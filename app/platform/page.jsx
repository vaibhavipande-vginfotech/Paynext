import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import PlatformStack from "@/components/site/platform-stack"
import CtaBand from "@/components/site/cta-band"
import { platform, pillars, layers, principles, engines, pillarEngines, audiences, PLACEHOLDER } from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/platform", {
  title: { absolute: "PayNext+ — The international payments operating platform" },
  description: platform.lead,
})

const engineById = Object.fromEntries(engines.map((e) => [e.id, e]))

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow={`${platform.name} · ${platform.kicker}`}
        title="The international payments"
        highlight="operating platform"
        lead={platform.lead}
        primary={{ label: "Schedule a consultation", href: "/contact" }}
        secondary={{ label: "Core platforms", href: "/products" }}
      >
        <Reveal delay={0.15} className="mx-auto mt-16 max-w-5xl">
          <PlatformStack />
        </Reveal>
      </PageHero>

      {/* Positioning ambition */}
      <section className="border-b border-border py-16">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <ol className="grid gap-3 sm:grid-cols-3">
              {platform.ambition.map((step, i) => (
                <li key={step} className={`rounded-2xl border p-6 ${i === 2 ? "border-brand/50 bg-brand-soft" : "border-border bg-card"}`}>
                  <span className="text-xs text-platinum">0{i + 1}</span>
                  <p className={`mt-2 text-lg font-semibold ${i === 2 ? "text-brand" : "text-foreground"}`}>{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted-foreground">{platform.ambitionLine}</p>
          </Reveal>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-24">
        <Container className="space-y-5">
          {pillars.map((p, i) => (
            <Reveal key={p.id} variant={i % 2 ? "right" : "left"}>
              <article id={p.id} className="hover-card scroll-mt-28 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <div className="flex items-center gap-4">
                    <IconTile icon={p.icon} />
                    <span className="text-sm text-platinum">0{i + 1}</span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold uppercase tracking-wide text-foreground sm:text-4xl">{p.name}</h2>
                  <ul className="mt-5 space-y-2">
                    {p.lines.map((l) => (
                      <li key={l} className="text-lg text-foreground/90">{l}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  {pillarEngines[p.id].map((id) => {
                    const e = engineById[id]
                    return (
                      <div key={id} className="hover-card rounded-2xl border border-border bg-background/60 p-5">
                        <p className="text-sm font-semibold text-foreground">
                          {e.name} <span className="font-normal text-muted-foreground">— {e.role}</span>
                        </p>
                        <p className="mt-1 text-sm italic text-brand">{e.tagline}</p>
                        <ul className="mt-3 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
                          {e.points.map((pt) => (
                            <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Layers */}
      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {layers.map((l, i) => (
              <Reveal key={l.id} delay={i * 0.08}>
                <Link href={l.href} className="hover-card group flex h-full flex-col rounded-3xl border border-border bg-card p-8 hover:border-brand/40">
                  <IconTile icon={l.icon} />
                  <Eyebrow className="mt-8">{l.tag}</Eyebrow>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">{l.name}</h3>
                  {l.placeholder && <p className="mt-5 text-sm italic text-muted-foreground">{PLACEHOLDER}</p>}
                  <ul className="mt-5 space-y-2">
                    {l.lines.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-1 pt-8 text-sm font-medium text-foreground">
                    {l.name}
                    <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles + audiences */}
      <section className="py-20">
        <Container className="space-y-8 text-center">
          <Reveal className="flex flex-wrap justify-center gap-3">
            {principles.map((p) => (
              <span key={p} className="hover-chip rounded-full border border-brand/30 bg-brand-soft px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-brand">
                {p}
              </span>
            ))}
          </Reveal>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span key={a.id} className="hover-chip flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-foreground">
                <a.icon className="h-4 w-4 text-brand" aria-hidden="true" /> {a.name}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
