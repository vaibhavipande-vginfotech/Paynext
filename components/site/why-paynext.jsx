import { Container, Eyebrow, Reveal } from "@/components/site/primitives"
import { legacy } from "@/lib/legacy-content"

// Old website home page: hero tagline, "Why PayNext" and the four reasons — their first letters spell N-E-X-T.
export default function WhyPayNext() {
  return (
    <section className="pattern-grid py-24">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="left">
            <Eyebrow>Why PayNext</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.8rem]">
              Where speed matters <span className="text-brand-gradient">above everything else.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">{legacy.subline}</p>
          </Reveal>
          <Reveal variant="right" className="space-y-4 text-muted-foreground">
            <p>{legacy.marketplace}</p>
            {legacy.why.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <p className="text-sm font-semibold text-foreground">{legacy.reasonsIntro}</p>
        </Reveal>
        <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {legacy.reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.letter}
              delay={i * 0.08}
              className="hover-card group relative overflow-hidden rounded-3xl border border-border bg-card p-7"
            >
              <span
                aria-hidden="true"
                className="parallax pointer-events-none absolute -right-3 -top-8 select-none text-[9rem] font-bold leading-none text-brand opacity-[0.07] transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-[0.14]"
              >
                {r.letter}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6A1BEA,#8030FD)] text-xl font-bold text-white shadow-[0_10px_24px_-10px_rgba(79,0,205,0.7)]">
                {r.letter}
              </span>
              <h3 className="relative mt-6 text-lg font-bold text-foreground">{r.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
