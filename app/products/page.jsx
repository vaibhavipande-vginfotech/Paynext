import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import { brand, engines, solutionsNav } from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/products", {
  title: "Core Platforms — PerseusPay, VISTA, Europa | PayNext",
  description: "PerseusPay – Core Switching & Card Processing Platform. VISTA – Acquiring Management Platform. Europa – Payment Orchestration Platform.",
})

const homes = { perseuspay: "/platform#connect", vista: "/platform/vista", europa: "/platform#connect" }

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Platforms Overview"
        title="PerseusPay · VISTA ·"
        highlight="Europa"
        lead={brand.statement}
        primary={{ label: "Schedule a consultation", href: "/contact" }}
        secondary={{ label: "PayNext+", href: "/platform" }}
      />

      <section className="py-24">
        <Container className="space-y-5">
          {engines.map((e, idx) => (
            <Reveal key={e.id} variant={idx % 2 ? "right" : "left"}>
              <article id={e.id} className="hover-card scroll-mt-28 grid gap-10 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <IconTile icon={e.icon} />
                  <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">{e.name}</h2>
                  <p className="mt-2 text-muted-foreground">{e.role}</p>
                  <p className="mt-6 text-lg font-medium italic text-brand">{e.tagline}</p>
                  <Link href={homes[e.id]} className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand">
                    PayNext+ <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
                  </Link>
                </div>
                <div>
                  <Eyebrow className="mb-4">{e.name} Capabilities</Eyebrow>
                  <ul className="grid content-start gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3 bg-background p-5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/50 py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsNav.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.04}>
                <Link href={s.href} className="hover-card group flex h-full items-center justify-between rounded-2xl border border-border bg-card p-6 font-semibold text-foreground hover:border-brand/40">
                  {s.name}
                  <ArrowUpRight className="h-5 w-5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
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
