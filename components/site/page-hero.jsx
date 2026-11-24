import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container, Reveal } from "@/components/site/primitives"
import { Art } from "@/components/site/art"

// Inner-page hero in the Design 2 "Bold" style: violet panel with a rounded bottom.
// With `art` (or `aside`) it becomes a two-column, left-aligned hero; otherwise it is centred.
// `chips` renders a row of small pills under the lead, as on the template's Solutions page.
export default function PageHero({ eyebrow, title, highlight, lead, primary, secondary, chips, art, aside, children }) {
  const side = aside || (art && <Art kind={art} />)
  const center = !side
  return (
    <section className="pt-[63px]">
      <div className="hero-violet hero-aurora relative isolate overflow-hidden rounded-b-[2.5rem] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.06] scroll-drift" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/[0.05] scroll-drift" />
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <Container className={`relative ${center ? "" : "grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]"}`}>
          <div className={center ? "mx-auto max-w-4xl text-center" : "min-w-0"}>
            {eyebrow && (
              <Reveal as="p" className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">{eyebrow}</Reveal>
            )}
            <Reveal as="h1" delay={0.08} className="mt-5 text-[2.2rem] leading-[1.08] text-white min-[400px]:text-[2.5rem] sm:text-5xl lg:text-[3.6rem]">
              {title}
              {highlight && <> {highlight}</>}
            </Reveal>
            {lead && <Reveal as="p" delay={0.16} className={`mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg ${center ? "mx-auto" : ""}`}>{lead}</Reveal>}
            {chips?.length > 0 && (
              <ul className={`mt-7 flex flex-wrap gap-2 ${center ? "justify-center" : ""}`}>
                {chips.map((c, i) => (
                  <Reveal as="li" variant="scale" delay={0.22 + i * 0.04} key={c} className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20">
                    {c}
                  </Reveal>
                ))}
              </ul>
            )}
            {(primary || secondary) && (
              <Reveal delay={0.28} className={`mt-9 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
                {primary && (
                  <Link
                    href={primary.href}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#6A1BEA] shadow-[0_10px_30px_rgba(18,8,46,0.25)] transition-transform hover:-translate-y-0.5"
                  >
                    {primary.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
                {secondary && (
                  <Link
                    href={secondary.href}
                    className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {secondary.label}
                  </Link>
                )}
              </Reveal>
            )}
          </div>
          {aside && <Reveal variant="right" delay={0.15} className="min-w-0">{aside}</Reveal>}
          {!aside && art && (
            <Reveal variant="right" delay={0.15} className="mx-auto w-full max-w-lg overflow-hidden rounded-[1.75rem] ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(18,8,46,0.45)]">{side}</Reveal>
          )}
        </Container>
        {children && <Container className="relative">{children}</Container>}
      </div>
    </section>
  )
}
