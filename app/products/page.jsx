import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Container, Reveal } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import { Art, NetworkDiagram } from "@/components/site/art"
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
        art="dashboard"
        chips={engines.map((e) => e.name)}
      />

      {/* Design 2 "Platforms" panels: lavender panel with text + illustration, module cards below */}
      <section className="py-24">
        <Container className="space-y-20">
          {engines.map((e, idx) => (
            <article key={e.id} id={e.id} className="scroll-mt-28">
              <Reveal className="grid items-center gap-10 rounded-[2rem] bg-muted p-7 sm:p-12 lg:grid-cols-2">
                <div className={`min-w-0 ${idx % 2 ? "lg:order-2" : ""}`}>
                  <p className="font-mono text-xs uppercase tracking-wider text-brand">{e.role}</p>
                  <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-[2.6rem]">{e.name}</h2>
                  <p className="mt-4 text-lg font-medium italic text-brand">{e.tagline}</p>
                  <Link
                    href={homes[e.id]}
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    PayNext+ <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="parallax art-zoom mx-auto w-full max-w-lg overflow-hidden rounded-[1.5rem]">
                  {e.id === "europa" ? (
                    <div className="bg-[var(--art-bg)] p-4">
                      <NetworkDiagram />
                    </div>
                  ) : (
                    <Art kind={e.id === "vista" ? "dashboard" : "card"} />
                  )}
                </div>
              </Reveal>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {e.points.map((pt, i) => (
                  <Reveal as="li" key={pt} delay={(i % 4) * 0.05} className="hover-card flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
                    {pt}
                  </Reveal>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="surface-lavender py-20">
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
