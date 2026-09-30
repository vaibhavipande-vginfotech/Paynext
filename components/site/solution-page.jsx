import { Check } from "lucide-react"
import { Container, Eyebrow, Reveal } from "@/components/site/primitives"
import { Marquee } from "@/components/site/motion"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import Placeholder from "@/components/site/placeholder"

// Renders a solution page from lib/solutions-content.json (parsed verbatim from website-addtions.docx).
export default function SolutionPage({ data, eyebrow, title, highlight }) {
  const [heroLead, ...heroRest] = data.hero
  const keyFeatures = data.sections.find((s) => s.title === "Key Features")
  const others = data.sections.filter((s) => s !== keyFeatures)

  // "Transaction Processing Modes" is a group heading followed by its sub-sections.
  const blocks = []
  for (let i = 0; i < others.length; i++) {
    const s = others[i]
    if (!s.bullets.length && !s.intro) {
      const children = []
      while (others[i + 1] && /Mode/.test(others[i + 1].title)) children.push(others[++i])
      blocks.push({ ...s, children })
    } else blocks.push(s)
  }

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        lead={[heroLead, ...heroRest].join(" ")}
        primary={{ label: "Schedule a consultation", href: "/contact" }}
        secondary={{ label: "All solutions", href: "/solutions" }}
      />

      {data.overview.length > 0 && (
        <section className="py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      {keyFeatures && (
        <section className="border-y border-border bg-muted/50 py-10" aria-label={keyFeatures.title}>
          <Marquee speed={45}>
            {keyFeatures.bullets.map((b) => (
              <span key={b} className="hover-chip flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground">
                <Check className="h-4 w-4 text-growth" aria-hidden="true" /> {b}
              </span>
            ))}
          </Marquee>
        </section>
      )}

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Our Capabilities</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {data.capabilities.map((c, i) =>
              c.placeholder ? (
                <Reveal key={c.title} variant={i % 2 ? "right" : "left"} delay={(i % 2) * 0.08} className="flex">
                  <Placeholder label={`0${i + 1}`} className="w-full" />
                </Reveal>
              ) : (
              <Reveal key={c.title} variant={i % 2 ? "right" : "left"} delay={(i % 2) * 0.08} className="hover-card flex flex-col rounded-3xl border border-border bg-card p-8">
                <span className="text-xs text-platinum">0{i + 1}</span>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">{c.title}</h2>
                {c.desc && <p className="mt-3 text-muted-foreground">{c.desc}</p>}
                {c.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {c.note && <p className="mt-5 text-sm text-muted-foreground">{c.note}</p>}
              </Reveal>
              ),
            )}
          </div>
        </Container>
      </section>

      {keyFeatures && (
        <section className="border-y border-border bg-muted/50 py-24">
          <Container>
            <Reveal className="text-center">
              <Eyebrow>{keyFeatures.title}</Eyebrow>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {keyFeatures.bullets.map((b, i) => (
                <Reveal key={b} delay={(i % 4) * 0.05} className="hover-card rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground">
                  {b}
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          {blocks.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className={`hover-card rounded-3xl border border-border bg-card p-8 ${s.children?.length ? "lg:col-span-2" : ""}`}>
              <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
              {s.intro && <p className="mt-3 text-muted-foreground">{s.intro}</p>}
              {s.bullets.length > 0 && <Bullets items={s.bullets} />}
              {s.children?.length > 0 && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {s.children.map((c) => (
                    <div key={c.title} className="hover-card rounded-2xl border border-border bg-background/60 p-6">
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                      <Bullets items={c.bullets} />
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  )
}

function Bullets({ items }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-2.5 text-sm text-foreground/90">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>
  )
}
