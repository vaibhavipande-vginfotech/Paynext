import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import { layers, platform } from "@/lib/site-content"
import Placeholder from "@/components/site/placeholder"

// Template for the PayNext+ layer pages. Renders only the layer's deck lines plus
// any extra blocks passed in from the master document.
export default function LayerPage({ id, extra }) {
  const layer = layers.find((l) => l.id === id)
  const others = layers.filter((l) => l.id !== id)
  return (
    <>
      <PageHero
        eyebrow={platform.name}
        title={layer.name}
        lead={layer.tag}
        primary={{ label: "Schedule a consultation", href: "/contact" }}
        secondary={{ label: platform.name, href: "/platform" }}
      />

      <section className="py-24">
        <Container>
          {layer.placeholder && <Placeholder label={layer.name} />}
          <div className={`grid gap-5 ${layer.lines.length === 2 ? "sm:grid-cols-2" : "lg:grid-cols-3"}`}>
            {layer.lines.map((line, i) => (
              <Reveal key={line} delay={i * 0.08} className="hover-card rounded-3xl border border-border bg-card p-8">
                <IconTile icon={layer.icon} />
                <p className="mt-6 text-xl font-semibold leading-snug text-foreground">{line}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {extra}

      <section className="pb-8">
        <Container className="grid gap-5 sm:grid-cols-2">
          {others.map((l) => (
            <Link key={l.id} href={l.href} className="hover-card group flex items-center justify-between rounded-2xl border border-border bg-card p-6 hover:border-brand/40">
              <span>
                <Eyebrow>{l.tag}</Eyebrow>
                <span className="mt-1 block text-lg font-semibold text-foreground">{l.name}</span>
              </span>
              <ArrowRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

export function CheckList({ title, eyebrow, items, footnote }) {
  return (
    <section className="border-y border-border bg-muted/50 py-24">
      <Container>
        <Reveal className="text-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-3 text-3xl font-semibold text-foreground">{title}</h2>
        </Reveal>
        <Reveal className="mx-auto mt-10 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {items.map((it) => (
            <div key={it} className="flex gap-3 bg-card p-5 text-foreground/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
              {it}
            </div>
          ))}
        </Reveal>
        {footnote && <p className="mt-8 text-center text-lg font-medium italic text-brand">{footnote}</p>}
      </Container>
    </section>
  )
}
