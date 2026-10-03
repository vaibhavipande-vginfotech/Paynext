import PageHero from "@/components/site/page-hero"
import { Container } from "@/components/site/primitives"

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

function Blocks({ blocks }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) =>
        b.ul ? (
          <ul key={i} className="list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground marker:text-brand">
            {b.ul.map((li) => (
              <li key={li} className="break-words">
                {li}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="break-words leading-relaxed text-muted-foreground">
            {b.p}
          </p>
        ),
      )}
    </div>
  )
}

// Shared layout for legal pages: hero, sticky contents (lg+) built from section headings, readable article.
// `doc` comes from lib/legal-content.json: { title, intro: Block[], sections: { heading, blocks: Block[] }[] }
export default function LegalDocument({ eyebrow, doc, lead, children }) {
  const { title, intro, sections } = doc
  const hasToc = sections.length > 1
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />

      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className={hasToc ? "lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 xl:gap-16" : ""}>
            {hasToc && (
              <div className="hidden lg:block">
                <nav aria-label={title} className="sticky top-28">
                  <ul className="space-y-1 border-l border-border">
                    {sections.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${slug(section.heading)}`}
                          className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            <article className={`mx-auto min-w-0 max-w-3xl space-y-12 ${hasToc ? "lg:mx-0" : ""}`}>
              {intro.length > 0 && <Blocks blocks={intro} />}
              {sections.map((section) => (
                <section key={section.heading} id={slug(section.heading)} className="scroll-mt-28">
                  <h2 className="mb-4 text-xl font-semibold text-foreground">{section.heading}</h2>
                  <Blocks blocks={section.blocks} />
                </section>
              ))}

              {children && <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">{children}</div>}
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}
